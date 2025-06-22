'use client'

import React from 'react'

interface WoodCrossProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function WoodCross({ className = '', size = 'md' }: WoodCrossProps) {
  const sizeClasses = {
    sm: 'w-16 h-20',
    md: 'w-24 h-30',
    lg: 'w-32 h-40',
    xl: 'w-48 h-60'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 120 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-lg"
      >
        {/* Wood grain patterns */}
        <defs>
          <pattern id="woodGrain" patternUnits="userSpaceOnUse" width="8" height="8">
            <rect width="8" height="8" fill="hsl(var(--wood-brown))" />
            <path d="M0,2 Q4,1 8,2 M0,4 Q4,5 8,4 M0,6 Q4,7 8,6" stroke="hsl(var(--wood-brown) / 0.3)" strokeWidth="0.5" />
          </pattern>
          
          <pattern id="woodGrainVertical" patternUnits="userSpaceOnUse" width="8" height="12">
            <rect width="8" height="12" fill="hsl(var(--wood-brown))" />
            <path d="M2,0 Q3,6 2,12 M4,0 Q5,6 4,12 M6,0 Q7,6 6,12" stroke="hsl(var(--wood-brown) / 0.3)" strokeWidth="0.5" />
          </pattern>

          <filter id="roughEdges">
            <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>

        {/* Cross shadow */}
        <g transform="translate(2,2)" opacity="0.3">
          <rect x="50" y="10" width="18" height="70" fill="hsl(var(--cross-shadow))" filter="url(#roughEdges)" />
          <rect x="35" y="25" width="48" height="18" fill="hsl(var(--cross-shadow))" filter="url(#roughEdges)" />
        </g>

        {/* Vertical beam */}
        <rect
          x="48"
          y="8"
          width="18"
          height="70"
          fill="url(#woodGrainVertical)"
          stroke="hsl(var(--wood-brown) / 0.8)"
          strokeWidth="1"
          filter="url(#roughEdges)"
        />
        
        {/* Horizontal beam */}
        <rect
          x="33"
          y="23"
          width="48"
          height="18"
          fill="url(#woodGrain)"
          stroke="hsl(var(--wood-brown) / 0.8)"
          strokeWidth="1"
          filter="url(#roughEdges)"
        />

        {/* Wood knots and imperfections */}
        <circle cx="42" cy="32" r="2" fill="hsl(var(--wood-brown) / 0.6)" />
        <circle cx="72" cy="35" r="1.5" fill="hsl(var(--wood-brown) / 0.7)" />
        <circle cx="57" cy="45" r="1" fill="hsl(var(--wood-brown) / 0.5)" />
        <circle cx="54" cy="15" r="1.5" fill="hsl(var(--wood-brown) / 0.6)" />

        {/* Weathering marks */}
        <path d="M48,20 L50,25 M52,18 L54,23 M60,16 L62,21" stroke="hsl(var(--wood-brown) / 0.4)" strokeWidth="0.5" />
        <path d="M35,28 L38,30 M75,29 L78,31 M40,36 L43,38" stroke="hsl(var(--wood-brown) / 0.4)" strokeWidth="0.5" />

        {/* Rough edges highlighting */}
        <rect
          x="48"
          y="8"
          width="18"
          height="70"
          fill="none"
          stroke="hsl(var(--foreground) / 0.1)"
          strokeWidth="0.5"
          filter="url(#roughEdges)"
        />
        <rect
          x="33"
          y="23"
          width="48"
          height="18"
          fill="none"
          stroke="hsl(var(--foreground) / 0.1)"
          strokeWidth="0.5"
          filter="url(#roughEdges)"
        />
      </svg>
    </div>
  )
}