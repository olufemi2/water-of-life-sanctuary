# Phase 1 MVP Implementation Guide

*Water of Life Sanctuary - Technical Implementation*

## Quick Start Commands

### Initial Setup (Day 1)
```bash
# 1. Create Next.js frontend
npx create-next-app@latest w2life-frontend --typescript --tailwind --eslint --app
cd w2life-frontend

# 2. Install essential dependencies
npm install @headlessui/react @heroicons/react framer-motion
npm install @stripe/stripe-js stripe
npm install @next/third-parties  # For Google Analytics
npm install react-hook-form zod  # Form handling
npm install date-fns             # Date utilities

# 3. Create Strapi backend (separate terminal/directory)
cd ..
npx create-strapi-app@latest w2life-backend --quickstart
```

### Environment Setup
```bash
# Frontend (.env.local)
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...

# Backend (.env)
DATABASE_CLIENT=sqlite
JWT_SECRET=your-jwt-secret
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
```

## Phase 1 Component Architecture

### File Structure
```
w2life-frontend/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── plan-visit/
│   │   └── page.tsx                # Enhanced Plan Your Visit
│   ├── sermons/
│   │   ├── page.tsx                # Sermon archive
│   │   └── [slug]/page.tsx         # Individual sermon
│   ├── events/
│   │   └── page.tsx                # Events calendar
│   ├── give/
│   │   └── page.tsx                # Donation page
│   └── api/
│       └── donate/route.ts         # Stripe integration
├── components/
│   ├── ui/                         # Reusable UI components
│   ├── Homepage/                   # Homepage sections
│   ├── PlanVisit/                  # Plan Your Visit components
│   ├── Sermons/                    # Sermon-related components
│   ├── Events/                     # Event components
│   ├── Donation/                   # Donation flow
│   ├── Family/                     # Family ministry components
│   └── Emergency/                  # Crisis communication
├── lib/
│   ├── strapi.ts                   # Strapi API client
│   ├── stripe.ts                   # Stripe configuration
│   └── utils.ts                    # Utility functions
└── types/
    └── index.ts                    # TypeScript type definitions
```

## Week 1-2: Foundation Components

### 1. Base UI Components

```typescript
// components/ui/Button.tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        {
          'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500': variant === 'primary',
          'bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500': variant === 'secondary',
          'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50': variant === 'outline',
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4 text-base': size === 'md',
          'h-12 px-6 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
```

```typescript
// components/ui/Card.tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn('rounded-lg border bg-white p-6 shadow-sm', className)}>
      {children}
    </div>
  )
}

export const CardHeader: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn('flex flex-col space-y-1.5 pb-6', className)}>
      {children}
    </div>
  )
}

export const CardTitle: React.FC<CardProps> = ({ className, children }) => {
  return (
    <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)}>
      {children}
    </h3>
  )
}

export const CardContent: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn('pt-0', className)}>
      {children}
    </div>
  )
}
```

### 2. Homepage Hero Section

```typescript
// components/Homepage/HeroSection.tsx
'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { ChevronRightIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

interface ServiceTime {
  day: string
  time: string
  type: string
}

const serviceTimes: ServiceTime[] = [
  { day: 'Sunday', time: '9:00 AM', type: 'Traditional Service' },
  { day: 'Sunday', time: '11:00 AM', type: 'Contemporary Service' },
  { day: 'Wednesday', time: '7:00 PM', type: 'Bible Study' },
]

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome Home to
            <span className="block text-orange-400">Water of Life Sanctuary</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-blue-100">
            A place where faith grows, community thrives, and everyone belongs. 
            Join us as we worship together and serve our community with love.
          </p>

          {/* Service Times */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {serviceTimes.map((service, index) => (
              <div key={index} className="rounded-lg bg-white/10 backdrop-blur-sm p-4">
                <div className="flex items-center justify-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-orange-400" />
                  <span className="font-semibold">{service.day}</span>
                </div>
                <div className="mt-1 text-xl font-bold">{service.time}</div>
                <div className="text-sm text-blue-100">{service.type}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="group"
              onClick={() => window.location.href = '/plan-visit'}
            >
              Plan Your Visit
              <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => window.location.href = '/sermons'}
            >
              Watch Latest Sermon
            </Button>
          </div>

          {/* Location Quick Info */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-blue-100">
            <MapPinIcon className="h-5 w-5" />
            <span>123 Faith Street, Hope City, ST 12345</span>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### 3. Enhanced Plan Your Visit Page

```typescript
// app/plan-visit/page.tsx
import React from 'react'
import { WelcomeVideo } from '@/components/PlanVisit/WelcomeVideo'
import { VirtualTour } from '@/components/PlanVisit/VirtualTour'
import { WhatToExpected } from '@/components/PlanVisit/WhatToExpect'
import { FAQSection } from '@/components/PlanVisit/FAQSection'
import { FamilyInfo } from '@/components/PlanVisit/FamilyInfo'
import { ContactForm } from '@/components/PlanVisit/ContactForm'

export default function PlanVisitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Plan Your Visit</h1>
          <p className="mt-2 text-lg text-gray-600">
            We're excited to welcome you to our church family!
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <WelcomeVideo />
          <VirtualTour />
          <WhatToExpected />
          <FamilyInfo />
          <FAQSection />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
```

```typescript
// components/PlanVisit/WelcomeVideo.tsx
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
                {/* Video thumbnail */}
                <img
                  src="/pastor-welcome-thumbnail.jpg"
                  alt="Pastor Welcome Video"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                title="Pastor Welcome Video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
```

### 4. Donation System

```typescript
// components/Donation/DonationModal.tsx
'use client'

import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface DonationForm {
  amount: number
  frequency: 'one-time' | 'monthly'
  category: string
  email: string
}

const donationCategories = [
  { id: 'tithe', name: 'Tithe & Offerings', description: 'General church operations' },
  { id: 'missions', name: 'Missions', description: 'Global outreach and missions' },
  { id: 'building', name: 'Building Fund', description: 'Church facility improvements' },
  { id: 'youth', name: 'Youth Ministry', description: 'Youth programs and activities' },
]

const suggestedAmounts = [25, 50, 100, 250, 500]

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<DonationForm>({
    amount: 0,
    frequency: 'one-time',
    category: 'tithe',
    email: '',
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      const stripe = await stripePromise
      if (!stripe) throw new Error('Stripe failed to load')

      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const { sessionId } = await response.json()
      
      const { error } = await stripe.redirectToCheckout({ sessionId })
      if (error) throw error

    } catch (error) {
      console.error('Donation error:', error)
      alert('There was an error processing your donation. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/25" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">Make a Donation</DialogTitle>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* Amount Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Donation Amount
              </label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {suggestedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setForm({ ...form, amount })}
                    className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                      form.amount === amount
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Other amount"
                value={form.amount || ''}
                onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Frequency */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Frequency
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {[
                  { value: 'one-time', label: 'One-time' },
                  { value: 'monthly', label: 'Monthly' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setForm({ ...form, frequency: option.value as any })}
                    className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                      form.frequency === option.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Donation Category
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {donationCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={!form.amount || !form.email || isProcessing}
            >
              {isProcessing ? 'Processing...' : `Donate $${form.amount}`}
            </Button>
          </form>

          <p className="mt-4 text-xs text-gray-500 text-center">
            Your donation is secure and encrypted. You'll receive an email receipt.
          </p>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
```

## Week 3-4 Implementation Tasks

### Daily Development Schedule

#### Week 3
**Monday:** Core layout and navigation setup
**Tuesday:** Homepage hero and welcome sections
**Wednesday:** Plan Your Visit page structure
**Thursday:** Virtual tour and FAQ components
**Friday:** Family ministry information sections

#### Week 4
**Monday:** Donation system frontend
**Tuesday:** Stripe integration and API routes
**Wednesday:** Sermon archive page
**Thursday:** Events calendar system
**Friday:** Mobile optimization and testing

### Critical Implementation Notes

#### Performance Optimization
```typescript
// app/layout.tsx - Core Web Vitals optimization
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Prevent font loading delays
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/hero-background.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://js.stripe.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

#### Mobile-First Responsive Design
```css
/* globals.css - Critical mobile styles */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Ensure touch targets are accessible */
@layer base {
  button, [role="button"] {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* Improve text readability on mobile */
  body {
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }
}

/* Custom utility classes */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

### Testing Checklist for Phase 1

#### Pre-Launch Testing (Week 7-8)
- [ ] **Cross-browser compatibility** (Chrome, Safari, Firefox, Edge)
- [ ] **Mobile responsiveness** (iPhone SE, iPhone 14, Samsung Galaxy, iPad)
- [ ] **Accessibility compliance** (screen reader, keyboard navigation, color contrast)
- [ ] **Performance** (Lighthouse audit >90 for all categories)
- [ ] **Donation flow** (test payments with Stripe test cards)
- [ ] **Form submissions** (contact forms, visitor information)
- [ ] **Content management** (Strapi admin interface functionality)
- [ ] **SEO optimization** (meta tags, structured data, sitemap)

This implementation guide provides the technical foundation for launching a high-quality MVP that immediately improves user experience while establishing a scalable platform for future enhancements.