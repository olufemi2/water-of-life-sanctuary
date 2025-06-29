'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

interface FormData {
  name: string
  email: string
  visitDate: string
  familySize: string
  questions: string
  prayerRequest: string
  contactPreference: 'email' | 'phone' | 'none'
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    visitDate: '',
    familySize: '',
    questions: '',
    prayerRequest: '',
    contactPreference: 'email'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <section>
        <Card className="max-w-2xl mx-auto text-center">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              We've received your information and are excited about your upcoming visit! 
              Someone from our welcome team will reach out to you soon.
            </p>
            <p className="text-sm text-gray-500">
              If you have any immediate questions, feel free to email us at info@wateroflifesanctuary.org.uk.
            </p>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Let Us Know You're Coming
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Help us prepare for your visit and answer any questions you might have
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Visitor Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1">
              <div>
                <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Planning to Visit
                </label>
                <select
                  id="visitDate"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="next-sunday-9am">This Sunday 9:00 AM</option>
                  <option value="next-sunday-11am">This Sunday 11:00 AM</option>
                  <option value="upcoming-sunday">An upcoming Sunday</option>
                  <option value="wednesday">Wednesday Bible Study</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="familySize" className="block text-sm font-medium text-gray-700 mb-1">
                Family Size
              </label>
              <select
                id="familySize"
                name="familySize"
                value={formData.familySize}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select family size</option>
                <option value="just-me">Just me</option>
                <option value="couple">2 people</option>
                <option value="small-family">3-4 people</option>
                <option value="large-family">5+ people</option>
              </select>
            </div>

            <div>
              <label htmlFor="questions" className="block text-sm font-medium text-gray-700 mb-1">
                Questions or Special Needs
              </label>
              <textarea
                id="questions"
                name="questions"
                rows={3}
                value={formData.questions}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any questions about your visit or special accommodations needed?"
              />
            </div>

            <div>
              <label htmlFor="prayerRequest" className="block text-sm font-medium text-gray-700 mb-1">
                Prayer Request (Optional)
              </label>
              <textarea
                id="prayerRequest"
                name="prayerRequest"
                rows={2}
                value={formData.prayerRequest}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we pray for you?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How would you prefer us to contact you?
              </label>
              <div className="space-y-2">
                {[
                  { value: 'email', label: 'Email' },
                  { value: 'none', label: 'Please don\'t contact me - I\'ll reach out if needed' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="contactPreference"
                      value={option.value}
                      checked={formData.contactPreference === option.value}
                      onChange={handleChange}
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Information'}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              We respect your privacy and will never share your information with third parties.
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}