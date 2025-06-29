import React from 'react'
import Link from 'next/link'
import { ProgressiveLoader } from '@/components/ui/ProgressiveLoader'
import { HeartIcon, UsersIcon, HandRaisedIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const values = [
  {
    icon: HeartIcon,
    title: 'Love & Compassion',
    description: 'We believe in showing God\'s love through compassion, kindness, and genuine care for one another.',
  },
  {
    icon: UsersIcon,
    title: 'Community',
    description: 'Building strong relationships and creating a sense of belonging where everyone is family.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Service',
    description: 'Living out our faith by serving our community and making a positive impact in the world.',
  },
]

export const WelcomeSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-6">
            Our Community Values
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Welcome to Our
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text">
              Church Family
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover what makes Water of Life Sanctuary a special place to grow in faith and fellowship.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ProgressiveLoader key={index} delay={index * 200}>
              <div className="glass-enhanced text-center group p-8 hover-glow bg-gradient-to-br from-white to-purple-50">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg group-hover:shadow-xl transition-all duration-300 float">
                <value.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-black text-gray-900">{value.title}</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            </ProgressiveLoader>
          ))}
        </div>

        <ProgressiveLoader delay={800}>
          <div className="mt-16 glass-enhanced p-10 bg-gradient-to-br from-purple-50 to-orange-50 hover-lift">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
                New Visitors Welcome
              </div>
              <h3 className="text-3xl font-black text-gray-900 leading-tight">
                First Time Here?
                <span className="block text-transparent bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text">
                  We&apos;ve Got You Covered!
                </span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We know visiting a new church can feel overwhelming. That&apos;s why we&apos;ve created resources 
                to help you feel at home from the moment you arrive. Our friendly welcome team is here 
                to answer questions and help you get connected.
              </p>
              <Link 
                href="/plan-visit"
                className="btn-divine group inline-flex items-center justify-center"
              >
                Plan Your First Visit
                <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold text-gray-900">What to Expect</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Warm, welcoming atmosphere for all ages
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Inspiring worship and practical teaching
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Children&apos;s programs during service
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Coffee and fellowship after service
                </li>
              </ul>
            </div>
          </div>
          </div>
        </ProgressiveLoader>
      </div>
    </section>
  )
}