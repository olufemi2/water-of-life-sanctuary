'use client'

import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  UserGroupIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import eventsData from '@/lib/data/events.json'

interface Event {
  id: string
  title: string
  date: string
  endDate?: string
  time: string
  endTime?: string
  location: string
  description: string
  category: string
  featured: boolean
  imageUrl: string
  registrationRequired: boolean
  registrationUrl?: string
  contactEmail: string
  contactPhone?: string
  ageRange?: string
  cost?: string
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showPastEvents, setShowPastEvents] = useState(false)

  const events: Event[] = eventsData

  const categories = Array.from(new Set(events.map(event => event.category)))

  const now = new Date()
  const today = now.toISOString().split('T')[0]

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const eventDate = event.endDate || event.date
      const isUpcoming = eventDate >= today
      const isPast = eventDate < today

      const matchesCategory = selectedCategory === '' || event.category === selectedCategory
      const matchesTimeFilter = showPastEvents ? isPast : isUpcoming

      return matchesCategory && matchesTimeFilter
    }).sort((a, b) => {
      if (showPastEvents) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
  }, [events, selectedCategory, showPastEvents, today])

  const featuredEvents = events.filter(event => event.featured && event.date >= today).slice(0, 2)

  const formatDate = (dateString: string, endDateString?: string) => {
    const startDate = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    if (endDateString && endDateString !== dateString) {
      const endDate = new Date(endDateString)
      const startMonth = startDate.getMonth()
      const endMonth = endDate.getMonth()
      
      if (startMonth === endMonth) {
        return `${startDate.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', year: 'numeric' })}`
      } else {
        return `${startDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}`
      }
    }

    return startDate.toLocaleDateString('en-US', options)
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Fellowship': 'bg-blue-100 text-blue-800',
      'Children': 'bg-green-100 text-green-800',
      'Youth': 'bg-purple-100 text-purple-800',
      'Women\'s Ministry': 'bg-pink-100 text-pink-800',
      'Men\'s Ministry': 'bg-indigo-100 text-indigo-800',
      'Worship': 'bg-yellow-100 text-yellow-800',
      'Outreach': 'bg-orange-100 text-orange-800',
      'Marriage': 'bg-red-100 text-red-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Church Events</h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover opportunities to connect, grow, and serve together
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Featured Events */}
        {featuredEvents.length > 0 && !showPastEvents && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Events</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {featuredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <div className="mt-2 space-y-1 text-sm text-gray-600">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-2" />
                            {formatDate(event.date, event.endDate)}
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-2" />
                            {event.time}{event.endTime && ` - ${event.endTime}`}
                          </div>
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-2" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    {event.registrationRequired && event.registrationUrl && (
                      <Button className="w-full">
                        Register Now
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Time Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Period
                </label>
                <div className="flex gap-2">
                  <Button
                    variant={!showPastEvents ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setShowPastEvents(false)}
                  >
                    Upcoming
                  </Button>
                  <Button
                    variant={showPastEvents ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setShowPastEvents(true)}
                  >
                    Past Events
                  </Button>
                </div>
              </div>

              {/* Clear Filters */}
              {selectedCategory && (
                <div className="ml-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCategory('')}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredEvents.length} {showPastEvents ? 'past' : 'upcoming'} events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        {formatDate(event.date, event.endDate)}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        {event.time}{event.endTime && ` - ${event.endTime}`}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        {event.location}
                      </div>
                      {event.ageRange && (
                        <div className="flex items-center">
                          <UserGroupIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                          Ages {event.ageRange}
                        </div>
                      )}
                      {event.cost && (
                        <div className="flex items-center">
                          <span className="h-4 w-4 mr-2 flex-shrink-0 text-center text-xs">$</span>
                          {event.cost}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4">{event.description}</p>

                {/* Contact Info */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <EnvelopeIcon className="h-4 w-4 mr-2" />
                    <a href={`mailto:${event.contactEmail}`} className="hover:text-blue-600">
                      {event.contactEmail}
                    </a>
                  </div>
                  {event.contactPhone && (
                    <div className="flex items-center text-sm text-gray-600">
                      <PhoneIcon className="h-4 w-4 mr-2" />
                      <a href={`tel:${event.contactPhone}`} className="hover:text-blue-600">
                        {event.contactPhone}
                      </a>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-4 space-y-2">
                  {event.registrationRequired && event.registrationUrl && !showPastEvents && (
                    <Button className="w-full">
                      Register for Event
                    </Button>
                  )}
                  {!event.registrationRequired && !showPastEvents && (
                    <div className="text-center text-sm text-gray-600 py-2">
                      No registration required - just show up!
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600 mb-4">
              {showPastEvents 
                ? "No past events match your criteria." 
                : "No upcoming events match your criteria."
              }
            </p>
            {selectedCategory && (
              <Button
                variant="outline"
                onClick={() => setSelectedCategory('')}
              >
                View All Events
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}