import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { HeartIcon, AcademicCapIcon, PlayIcon } from '@heroicons/react/24/outline'

const familyPrograms = [
  {
    icon: HeartIcon,
    title: 'The Acorns',
    age: '2 - 7 years',
    description: 'A nurturing environment for our youngest members to learn about God\'s love through age-appropriate activities.',
    features: ['Bible stories and songs', 'Creative activities and crafts', 'Safe, caring environment']
  },
  {
    icon: AcademicCapIcon,
    title: 'Children\'s Church',
    age: '8 - 10 years',
    description: 'Interactive learning and worship designed specifically for children during the main service.',
    features: ['Age-appropriate Bible teaching', 'Music and worship', 'Character building activities']
  },
  {
    icon: PlayIcon,
    title: 'Youth Church',
    age: '11+ years',
    description: 'A place where young people get to know God and His ways within a friendly and approachable environment.',
    features: ['Monthly youth club', 'Moral instruction focus', 'Character building emphasis']
  }
]

export const FamilyInfo: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Programs for Your Family
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We have something special for every member of your family
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {familyPrograms.map((program, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                <program.icon className="h-8 w-8 text-amber-600" />
              </div>
              <CardTitle className="text-xl">{program.title}</CardTitle>
              <p className="text-sm font-medium text-purple-600">{program.age}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <ul className="text-left space-y-1">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <span className="mr-2 text-green-500">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12 bg-blue-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Additional Ministries
            </h3>
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2">Women's Fellowship</h4>
              <p className="text-gray-600 text-sm mb-4">
                'The Glorious Fellowship of Water of Life Sanctuary' - providing every woman from all walks 
                of life with opportunities to grow spiritually and support each other through the good news 
                of the kingdom of God.
              </p>
            </div>
            <p className="text-gray-600 mb-6">
              We'd love to give your children a special welcome gift and help you get connected 
              with the programs that are right for your family.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <div className="text-center">
                <h4 className="font-medium text-gray-900">Check-in Process</h4>
                <p className="text-sm text-gray-600">Arrive 15 minutes early for easy check-in</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-gray-900">Safety First</h4>
                <p className="text-sm text-gray-600">All volunteers are background checked</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-gray-900">Parent Notification</h4>
                <p className="text-sm text-gray-600">We'll text if your child needs you</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}