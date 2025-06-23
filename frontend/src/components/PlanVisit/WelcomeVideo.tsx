'use client'

import React, { useState } from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'
import { Card, CardContent } from '@/components/ui/Card'

export const WelcomeVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        A Personal Welcome from Pastor Johnson
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Hear directly from our pastor about what makes our church special
      </p>

      <Card className="mt-8 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-gray-900">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/90 transition-all hover:bg-white hover:scale-105"
                >
                  <PlayIcon className="h-8 w-8 text-blue-600 transition-transform group-hover:scale-110" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">Welcome Message</h3>
                    <p className="text-lg">Click to play Pastor Johnson&apos;s welcome</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-white text-center">
                  <h3 className="text-xl font-semibold mb-4">Video would play here</h3>
                  <p className="text-gray-300">In a real implementation, this would be a YouTube embed or video player</p>
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Close Video
                  </button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}