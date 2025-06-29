'use client'

import React, { useEffect, useState } from 'react'

interface ProgressiveLoaderProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const ProgressiveLoader: React.FC<ProgressiveLoaderProps> = ({ 
  children, 
  delay = 100,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`${isVisible ? 'fade-in' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  )
}