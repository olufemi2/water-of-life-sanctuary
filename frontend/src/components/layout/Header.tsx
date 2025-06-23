'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { DonationModal } from '@/components/Donation/DonationModal'
import { ThemeToggle, ThemeSelector } from '@/components/ui/ThemeToggle'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Plan Your Visit', href: '/plan-visit' },
  { name: 'Sermons', href: '/sermons' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [donationModalOpen, setDonationModalOpen] = useState(false)

  return (
    <header className="bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-purple-500/20 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Modern Animated Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4 group">
              {/* RCCG Logo */}
              <div className="relative">
                <div className="h-14 w-14 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 float overflow-hidden logo-glow">
                  <Image 
                    src="/rccg.jpg" 
                    alt="RCCG Logo" 
                    width={40}
                    height={40}
                    className="object-contain filter brightness-110 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur pulse-bg transition-opacity duration-500"></div>
              </div>
              
              {/* W2Life Logo */}
              <div className="relative">
                <div className="h-14 w-14 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 float overflow-hidden logo-glow" style={{ animationDelay: '0.2s' }}>
                  <Image 
                    src="/w2life.jpg" 
                    alt="Water of Life Logo" 
                    width={40}
                    height={40}
                    className="object-contain filter brightness-110 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl blur pulse-bg transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <div className="ml-2">
                <span className="text-xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                  Water of Life
                </span>
                <span className="block text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-500">
                  Sanctuary
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeSelector />
            <ThemeToggle />
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => setDonationModalOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
            >
              Give Online
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/98 backdrop-blur-lg border-t border-purple-500/20">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg mx-2 transition-all duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg font-semibold"
                  onClick={() => {
                    setDonationModalOpen(true)
                    setMobileMenuOpen(false)
                  }}
                >
                  Give Online
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <DonationModal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
      />
    </header>
  )
}