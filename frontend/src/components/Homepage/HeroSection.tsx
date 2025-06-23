'use client'

import React from 'react'
import Link from 'next/link'
import { WoodCross } from '@/components/ui/WoodCross'
import { ChevronRightIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

interface ServiceTime {
  day: string
  time: string
  type: string
}

const serviceTimes: ServiceTime[] = [
  { day: 'Sunday', time: '10:40 AM', type: 'Main Service' },
  { day: 'Sunday', time: '10:40 AM', type: 'Children\'s Church' },
  { day: 'Monthly', time: 'Various', type: 'Youth Club' },
]

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 animate-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl float"></div>
      </div>
      
      {/* Modern floating cross */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 float">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center shadow-xl">
          <WoodCross size="md" className="opacity-80" />
        </div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-lg rounded-full text-white font-medium text-sm tracking-wider uppercase">
              Welcome to Our Community
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Water of Life
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Sanctuary
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/90 leading-relaxed">
            A place where faith grows, community thrives, and everyone belongs. 
            <span className="font-semibold text-yellow-300"> Join us as we worship together and serve our community with love.</span>
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {serviceTimes.map((service, index) => (
              <div key={index} className="glass-enhanced p-6 text-center group hover-glow fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <ClockIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-gray-800 text-lg">{service.day}</span>
                </div>
                <div className="text-2xl font-black text-gray-900 mb-2">{service.time}</div>
                <div className="text-sm font-medium text-purple-600 uppercase tracking-wider">{service.type}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:justify-center">
            <Link 
              href="/plan-visit"
              className="btn-divine group inline-flex items-center justify-center"
            >
              Plan Your Visit
              <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/sermons"
              className="glass-enhanced text-white hover:bg-white/30 font-semibold py-3 px-8 rounded-full hover-lift inline-flex items-center justify-center"
            >
              Watch Latest Sermon
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center space-x-2 text-white/80">
            <div className="w-8 h-8 glass-enhanced rounded-full flex items-center justify-center">
              <MapPinIcon className="h-4 w-4" />
            </div>
            <span className="font-medium">The Kings Centre Simpson, Milton Keynes MK6 3AL</span>
          </div>
        </div>
      </div>
    </section>
  )
}