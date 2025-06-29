'use client'

import React, { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from './Button'

const BANNER_DISMISS_KEY = 'foodBankBannerDismissed'
const DISMISS_DURATION = 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds

export const FoodBankBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Check if banner should be shown
    const checkBannerVisibility = () => {
      const dismissedData = localStorage.getItem(BANNER_DISMISS_KEY)
      
      if (!dismissedData) {
        setIsVisible(true)
        return
      }

      try {
        const { timestamp } = JSON.parse(dismissedData)
        const now = Date.now()
        
        // Show banner if 3 days have passed since dismissal
        if (now - timestamp > DISMISS_DURATION) {
          localStorage.removeItem(BANNER_DISMISS_KEY)
          setIsVisible(true)
        }
      } catch {
        // If parsing fails, remove invalid data and show banner
        localStorage.removeItem(BANNER_DISMISS_KEY)
        setIsVisible(true)
      }
    }

    checkBannerVisibility()
  }, [])

  const handleDismiss = () => {
    setIsAnimating(true)
    
    // Store dismissal timestamp
    localStorage.setItem(BANNER_DISMISS_KEY, JSON.stringify({
      timestamp: Date.now()
    }))

    // Animate out then hide
    setTimeout(() => {
      setIsVisible(false)
      setIsAnimating(false)
    }, 300)
  }

  const handleContactClick = () => {
    window.location.href = '/contact'
  }

  const handleGetInvolvedClick = () => {
    window.location.href = '/contact#office-staff'
  }

  if (!isVisible) return null

  return (
    <div 
      className={`
        relative bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 
        text-white shadow-lg border-b border-white/20 z-40
        transform transition-all duration-300 ease-in-out
        ${isAnimating ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'}
      `}
      role="banner"
      aria-label="Food bank initiative announcement"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Content */}
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg" role="img" aria-label="Bread emoji">🍞</span>
              </div>
            </div>
            
            {/* Message */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
                <div className="mb-2 sm:mb-0">
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    Making a Difference, One Meal at a Time
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                    Water of Life Sanctuary RCCG believes in caring for our community without exception. 
                    Through our food bank initiative, we&apos;re providing essential groceries and hope to local families facing hardship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Button
              onClick={handleContactClick}
              variant="secondary"
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
            >
              Contact Us
            </Button>
            <Button
              onClick={handleGetInvolvedClick}
              variant="secondary"
              size="sm"
              className="bg-white text-purple-600 hover:bg-white/90 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 font-medium"
            >
              Get Involved
            </Button>
            
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Dismiss food bank banner"
            >
              <XMarkIcon className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}