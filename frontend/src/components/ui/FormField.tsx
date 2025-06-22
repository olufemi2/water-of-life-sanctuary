'use client'

import React, { useState, useEffect } from 'react'
import { Input } from './input'
import { Textarea } from './textarea'
import { ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => string | null
}

interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  placeholder?: string
  options?: { value: string; label: string }[]
  validation?: ValidationRule
  className?: string
  rows?: number
  brutalist?: boolean
}

export function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  options,
  validation,
  className = '',
  rows = 4,
  brutalist = false
}: FormFieldProps) {
  const [error, setError] = useState<string | null>(null)
  const [touched, setTouched] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const validate = (val: string): string | null => {
    if (!validation) return null

    if (validation.required && !val.trim()) {
      return `${label} is required`
    }

    if (validation.minLength && val.length < validation.minLength) {
      return `${label} must be at least ${validation.minLength} characters`
    }

    if (validation.maxLength && val.length > validation.maxLength) {
      return `${label} must be no more than ${validation.maxLength} characters`
    }

    if (validation.pattern && !validation.pattern.test(val)) {
      if (type === 'email') {
        return 'Please enter a valid email address'
      }
      if (type === 'tel') {
        return 'Please enter a valid phone number'
      }
      return `${label} format is invalid`
    }

    if (validation.custom) {
      return validation.custom(val)
    }

    return null
  }

  useEffect(() => {
    if (touched) {
      const validationError = validate(value)
      setError(validationError)
      setIsValid(!validationError && value.trim().length > 0)
    }
  }, [value, touched])

  const handleBlur = () => {
    setTouched(true)
  }

  const fieldClasses = `
    ${brutalist 
      ? 'border-4 border-primary bg-background text-foreground font-bold uppercase tracking-wide focus:border-accent focus:shadow-[4px_4px_0px_hsl(var(--accent))] transition-all' 
      : 'border-border bg-background text-foreground focus:border-ring focus:ring-2 focus:ring-ring/20'
    }
    ${error && touched ? 'border-destructive' : ''}
    ${isValid && touched ? 'border-green-500' : ''}
  `

  const labelClasses = `
    block text-sm font-medium mb-2
    ${brutalist ? 'uppercase tracking-wider font-black text-foreground' : 'text-foreground'}
    ${error && touched ? 'text-destructive' : ''}
  `

  const renderField = () => {
    if (type === 'textarea') {
      return (
        <Textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          rows={rows}
          className={`${fieldClasses} ${className}`}
        />
      )
    }

    if (type === 'select' && options) {
      return (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          className={`w-full px-3 py-2 rounded-md focus:outline-none ${fieldClasses} ${className}`}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )
    }

    return (
      <Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`${fieldClasses} ${className}`}
      />
    )
  }

  return (
    <div className="space-y-1">
      <label htmlFor={name} className={labelClasses}>
        {label}
        {validation?.required && (
          <span className={brutalist ? 'text-accent ml-1' : 'text-destructive ml-1'}>*</span>
        )}
      </label>
      
      <div className="relative">
        {renderField()}
        
        {/* Validation indicators */}
        {touched && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {error ? (
              <ExclamationTriangleIcon className="h-5 w-5 text-destructive" />
            ) : isValid ? (
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
            ) : null}
          </div>
        )}
      </div>

      {/* Error message */}
      {error && touched && (
        <p className={`text-sm mt-1 ${brutalist ? 'font-bold uppercase tracking-wide' : ''} text-destructive`}>
          {error}
        </p>
      )}

      {/* Character count for text fields */}
      {(type === 'text' || type === 'textarea') && validation?.maxLength && (
        <p className={`text-xs text-right ${
          brutalist ? 'font-bold uppercase tracking-wide' : ''
        } ${value.length > validation.maxLength * 0.9 ? 'text-destructive' : 'text-muted-foreground'}`}>
          {value.length}/{validation.maxLength}
        </p>
      )}
    </div>
  )
}