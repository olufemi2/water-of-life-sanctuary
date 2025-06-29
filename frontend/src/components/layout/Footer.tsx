import React from 'react'
import Link from 'next/link'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const quickLinks = [
  { name: 'Plan Your Visit', href: '/plan-visit' },
  { name: 'Sermons', href: '/sermons' },
  { name: 'Events', href: '/events' },
  { name: 'About Us', href: '/about' },
]


export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Church Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-purple-600"></div>
              <span className="text-xl font-bold">Water of Life Sanctuary</span>
            </div>
            <p className="text-gray-300 mb-4">
              A place where faith grows, community thrives, and everyone belongs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">The Kings Centre Simpson, Milton Keynes MK6 3AL</span>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">info@wateroflifesanctuary.org.uk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Service Times */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <h3 className="text-lg font-semibold mb-4">Service Times</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-medium">Sunday Service</h4>
              <p className="text-gray-300">10:40 AM</p>
            </div>
            <div>
              <h4 className="font-medium">Youth Club</h4>
              <p className="text-gray-300">Monthly Events</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Water of Life Sanctuary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}