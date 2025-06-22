'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import { useTheme } from '@/contexts/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-9 w-9 px-0" disabled>
        <SunIcon className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="h-9 w-9 px-0"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-4 w-4" />
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
    </Button>
  )
}

export function ThemeSelector() {
  const { variant, setVariant } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">Theme:</span>
        <select disabled className="px-2 py-1 text-sm border rounded-md bg-background">
          <option>Loading...</option>
        </select>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">Theme:</span>
      <select
        value={variant}
        onChange={(e) => setVariant(e.target.value as any)}
        className="px-2 py-1 text-sm border rounded-md bg-background"
      >
        <option value="zinc">Zinc</option>
        <option value="brutalist">Brutalist</option>
        <option value="classic">Classic</option>
      </select>
    </div>
  )
}