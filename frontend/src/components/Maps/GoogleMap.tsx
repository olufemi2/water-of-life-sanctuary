'use client'

import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'

interface GoogleMapProps {
  address: string
  className?: string
}

export const GoogleMap: React.FC<GoogleMapProps> = ({ address, className = '' }) => {
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1054.565615965636!2d-0.7156861788203863!3d52.01237574202516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d52.170403199999996!2d-0.5079172!4m5!1s0x487654d4040280ab%3A0x95df1c2d799740cc!2sThe%20Kings%20Centre%2C%20390%20Simpson%20Rd%2C%20Simpson%2C%20Milton%20Keynes%20MK6%203AL!3m2!1d52.0144397!2d-0.7160768!5e0!3m2!1sen!2suk!4v1751155335703!5m2!1sen!2suk'
  const encodedAddress = encodeURIComponent(address)
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`

  return (
    <div className={`relative ${className}`}>
      {/* Interactive Google Map Embed */}
      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Water of Life Sanctuary Location"
          className="w-full h-full"
        />
      </div>

      {/* Map Controls Overlay */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg shadow-md text-sm font-medium transition-colors flex items-center gap-2"
        >
          <MapPinIcon className="h-4 w-4" />
          Get Directions
        </a>
        <a
          href="https://www.google.com/maps/place/The+Kings+Centre,+390+Simpson+Rd,+Simpson,+Milton+Keynes+MK6+3AL"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg shadow-md text-sm font-medium transition-colors"
        >
          View Larger Map
        </a>
      </div>

      {/* Address Info Overlay */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-md">
        <div className="flex items-start gap-2">
          <MapPinIcon className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-900">Water of Life Sanctuary</p>
            <p className="text-sm text-gray-600">{address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Alternative static map component for faster loading
export const StaticGoogleMap: React.FC<GoogleMapProps> = ({ address, className = '' }) => {
  const encodedAddress = encodeURIComponent(address)
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`

  return (
    <div className={`relative ${className}`}>
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
        {/* Fallback for when Google Maps API is not available */}
        <div className="text-center text-gray-500">
          <MapPinIcon className="w-16 h-16 mx-auto mb-4 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Us Here</h3>
          <p className="text-gray-600 mb-4">{address}</p>
          <div className="space-y-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <MapPinIcon className="h-4 w-4" />
              Get Directions
            </a>
            <br />
            <a
              href="https://www.google.com/maps/place/The+Kings+Centre,+390+Simpson+Rd,+Simpson,+Milton+Keynes+MK6+3AL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm transition-colors"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}