import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
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
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Welcome to Our Church Family
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover what makes Water of Life Sanctuary a special place to grow in faith and fellowship.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <value.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">New to Our Church?</h3>
              <p className="mt-4 text-gray-600">
                We know visiting a new church can feel overwhelming. That\'s why we\'ve created resources 
                to help you feel at home from the moment you arrive. Our friendly welcome team is here 
                to answer questions and help you get connected.
              </p>
              <div className="mt-6">
                <a
                  href="/plan-visit"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700"
                >
                  Learn more about your first visit
                  <ChevronRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
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
                  Children\'s programs during service
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Coffee and fellowship after service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}