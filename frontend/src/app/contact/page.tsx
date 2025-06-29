'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { StaticGoogleMap } from '@/components/Maps/GoogleMap'
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  type: 'general' | 'prayer' | 'visit' | 'ministry'
}

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Address',
    details: ['The Kings Centre Simpson', 'Milton Keynes MK6 3AL'],
    link: 'https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1054.565615965636!2d-0.7156861788203863!3d52.01237574202516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d52.170403199999996!2d-0.5079172!4m5!1s0x487654d4040280ab%3A0x95df1c2d799740cc!2sThe%20Kings%20Centre%2C%20390%20Simpson%20Rd%2C%20Simpson%2C%20Milton%20Keynes%20MK6%203AL!3m2!1d52.0144397!2d-0.7160768!5e0!3m2!1sen!2suk!4v1751155335703!5m2!1sen!2suk'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: ['info@wateroflifesanctuary.org.uk'],
    link: 'mailto:info@wateroflifesanctuary.org.uk'
  },
  {
    icon: ClockIcon,
    title: 'Office Hours',
    details: ['Monday - Friday', '9:00 AM - 5:00 PM'],
    link: null
  }
]

const officeStaff = [
  {
    name: 'Pastor Yomi Ogunlesi',
    role: 'Senior Pastor',
    email: 'pastor@wateroflifesanctuary.org.uk',
    availability: 'By appointment'
  },
  {
    name: 'Pastor Kunle Solaru',
    role: 'Associate Pastor',
    email: 'admin@wateroflifesanctuary.org.uk',
    availability: 'By appointment'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-lg mx-auto text-center">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out to us. We&apos;ve received your message and will get back to you within 24-48 hours.
            </p>
            <Button onClick={() => window.location.href = '/'}>
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-600">
            We&apos;d love to hear from you! Reach out with any questions or to schedule a visit.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <info.icon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-blue-600 hover:text-blue-700"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.details.map((detail, i) => (
                            <div key={i} className="text-sm">{detail}</div>
                          ))}
                        </a>
                      ) : (
                        info.details.map((detail, i) => (
                          <div key={i} className="text-sm text-gray-600">{detail}</div>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Office Staff */}
            <Card>
              <CardHeader>
                <CardTitle>Office Staff</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {officeStaff.map((staff, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <h3 className="font-semibold text-gray-900">{staff.name}</h3>
                    <p className="text-sm text-blue-600 mb-2">{staff.role}</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>
                        <a href={`mailto:${staff.email}`} className="hover:text-blue-600">
                          {staff.email}
                        </a>
                      </div>
                      <div className="text-xs text-gray-500">{staff.availability}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-1">
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                        Message Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="visit">Planning a Visit</option>
                        <option value="prayer">Prayer Request</option>
                        <option value="ministry">Ministry Information</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this message about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share your message, question, or prayer request..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    We typically respond within 24-48 hours. For urgent matters, please call our office directly.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Find Us</CardTitle>
            <p className="text-gray-600">
              We&apos;re located at The Kings Centre Simpson in Milton Keynes, with accessible parking available.
            </p>
          </CardHeader>
          <CardContent>
            <StaticGoogleMap 
              address="The Kings Centre Simpson, Milton Keynes MK6 3AL, United Kingdom"
              className="w-full"
            />
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Parking Information</h4>
                <ul className="space-y-1">
                  <li>• Free parking available on-site</li>
                  <li>• Accessible parking spaces</li>
                  <li>• Well-lit and secure area</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Public Transport</h4>
                <ul className="space-y-1">
                  <li>• Bus routes available to Simpson</li>
                  <li>• Milton Keynes Central Station nearby</li>
                  <li>• Taxi services available</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}