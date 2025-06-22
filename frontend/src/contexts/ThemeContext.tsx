'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemeVariant = 'zinc' | 'brutalist' | 'classic'

interface ThemeContextType {
  theme: Theme
  variant: ThemeVariant
  toggleTheme: () => void
  setVariant: (variant: ThemeVariant) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [variant, setVariant] = useState<ThemeVariant>('zinc')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme') as Theme
    const savedVariant = localStorage.getItem('theme-variant') as ThemeVariant
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Check system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setTheme(systemTheme)
    }
    
    if (savedVariant) {
      setVariant(savedVariant)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark', 'theme-zinc', 'theme-brutalist', 'theme-classic')
    
    // Apply theme
    root.classList.add(theme)
    
    // Apply variant
    if (variant !== 'zinc') {
      root.classList.add(`theme-${variant}`)
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme)
    localStorage.setItem('theme-variant', variant)
  }, [theme, variant, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleSetVariant = (newVariant: ThemeVariant) => {
    setVariant(newVariant)
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      variant,
      toggleTheme,
      setVariant: handleSetVariant
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Return default values instead of throwing an error during SSR
    return {
      theme: 'light' as Theme,
      variant: 'zinc' as ThemeVariant,
      toggleTheme: () => {},
      setVariant: () => {}
    }
  }
  return context
}