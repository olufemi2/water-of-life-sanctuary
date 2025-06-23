'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { DonationModal } from '@/components/Donation/DonationModal'
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
    <header className="bg-gray-900/98 backdrop-blur-lg shadow-xl border-b border-purple-500/20 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          {/* Combined Logo Design */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-6 group">
              {/* Combined Logo Container */}
              <div className="relative">
                <div className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-4 py-3 shadow-lg group-hover:shadow-2xl transition-all duration-500 float logo-glow overflow-hidden">
                  {/* RCCG Logo */}
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center mr-0 overflow-hidden">
                    <Image 
                      src="/rccg.jpg" 
                      alt="RCCG Logo" 
                      width={36}
                      height={36}
                      className="object-cover rounded-lg filter brightness-110 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                    />
                  </div>
                  
                  {/* W2Life Logo - No space between */}
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center ml-0 overflow-hidden">
                    <Image 
                      src="/w2life.jpg" 
                      alt="Water of Life Logo" 
                      width={36}
                      height={36}
                      className="object-cover rounded-lg filter brightness-110 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 pulse-bg transition-opacity duration-500"></div>
              </div>
              
              <div className="hidden sm:block ml-4">
                <div className="flex flex-col justify-center">
                  <span className="text-xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500 leading-tight font-sans">
                    Water of Life Sanctuary
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Increased spacing */}
          <nav className="hidden lg:flex lg:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Section with Social Links */}
          <div className="hidden md:flex flex-col items-end space-y-2">
            {/* Compact Social Links */}
            <div className="flex items-center space-x-1">
              <a 
                href="https://x.com/wateroflifesanctuary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                aria-label="Follow us on X"
              >
                <svg className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a 
                href="https://facebook.com/wateroflifesanctuary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 transition-all duration-300 group"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a 
                href="https://youtube.com/@wateroflifesanctuary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600/20 transition-all duration-300 group"
                aria-label="Subscribe to our YouTube"
              >
                <svg className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            {/* Give Online Button */}
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => setDonationModalOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold px-6"
            >
              Give Online
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
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
          <div className="lg:hidden bg-gray-900/98 backdrop-blur-lg border-t border-purple-500/20">
            <div className="space-y-1 pb-6 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl mx-4 transition-all duration-300 font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-3 px-6 py-4">
                <a 
                  href="https://x.com/wateroflifesanctuary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                  aria-label="Follow us on X"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://facebook.com/wateroflifesanctuary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://youtube.com/@wateroflifesanctuary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600/20 transition-all duration-300"
                  aria-label="Subscribe to our YouTube"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              
              <div className="px-6 py-2">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg font-semibold py-4"
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