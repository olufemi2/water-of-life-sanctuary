'use client'

import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'

interface GoogleMapProps {
  address: string
  className?: string
}

export const GoogleMap: React.FC<GoogleMapProps> = ({ address, className = '' }) => {
  const encodedAddress = encodeURIComponent(address)
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`
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
          href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
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
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=15&size=800x400&maptype=roadmap&markers=color:purple%7Clabel:C%7C${encodedAddress}&key=YOUR_API_KEY`
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
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
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