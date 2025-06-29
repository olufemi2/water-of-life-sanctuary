import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ClockIcon, MapPinIcon, UserGroupIcon, MusicalNoteIcon } from '@heroicons/react/24/outline'

const expectations = [
  {
    icon: ClockIcon,
    title: 'Service Times',
    items: [
      'Main Service: Sunday 10:40 AM',
      'Children & Young People depart for their groups',
      'Participatory praise and worship led by choir',
      'Bible teaching from Pastor or church leaders'
    ]
  },
  {
    icon: MapPinIcon,
    title: 'Location & Parking',
    items: [
      'Located at The Kings Centre Simpson',
      'Milton Keynes MK6 3AL',
      'Accessible venue with clear signage',
      'Children\'s areas clearly marked'
    ]
  },
  {
    icon: MusicalNoteIcon,
    title: 'Worship Style',
    items: [
      'Mix of contemporary and traditional music',
      'Practical, Bible-based teaching',
      'Friendly, welcoming atmosphere',
      'Dress code: Come as you are!'
    ]
  },
  {
    icon: UserGroupIcon,
    title: 'For Families',
    items: [
      'Nursery care for infants and toddlers',
      'Children\'s church during service',
      'Youth programs for teens',
      'Family-friendly environment'
    ]
  }
]

export const WhatToExpect: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          What to Expect
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Here&apos;s everything you need to know for your first visit
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {expectations.map((expectation, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <expectation.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{expectation.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {expectation.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}