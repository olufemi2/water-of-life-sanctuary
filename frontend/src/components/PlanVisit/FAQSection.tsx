'use client'

import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Card, CardContent } from '@/components/ui/Card'

const faqs = [
  {
    question: 'What should I wear?',
    answer: 'Come as you are! We believe that what matters most is your heart, not your attire. You\'ll see people in everything from jeans and t-shirts to business attire. Wear whatever makes you comfortable.'
  },
  {
    question: 'Where should I park?',
    answer: 'We have a large parking lot with plenty of free spaces. Handicap accessible parking is available near the main entrance. Our volunteers can help direct you to available spots during busy services.'
  },
  {
    question: 'What if I\'m late?',
    answer: 'Don\'t worry! Our greeters will help you find a seat even if you arrive after the service has started. We understand that life happens, and you\'re always welcome whenever you arrive.'
  },
  {
    question: 'Do I need to bring anything?',
    answer: 'Just bring yourself! We provide Bibles, connection cards, and anything else you might need. If you prefer to use your own Bible or take notes, feel free to bring those along.'
  },
  {
    question: 'Will anyone pressure me to join or give money?',
    answer: 'Absolutely not. We believe church should be a place where you can explore faith at your own pace. There\'s no pressure to join, give, or participate in anything you\'re not ready for.'
  },
  {
    question: 'How long is the service?',
    answer: 'Our services typically last 60-75 minutes, including worship music, a message, and prayer time. We try to be respectful of your time while creating meaningful worship experiences.'
  },
  {
    question: 'Is childcare available?',
    answer: 'Yes! We offer nursery care for children birth through age 2, and children\'s church for ages 3-12. All our childcare volunteers are background checked and trained. Check-in begins 15 minutes before service.'
  },
  {
    question: 'Can I talk to someone after the service?',
    answer: 'We\'d love to meet you! Our pastor and staff often greet people after services, and we have a welcome team ready to answer questions and help you get connected.'
  }
]

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Here are answers to the questions we hear most often from first-time visitors
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>
            {openIndex === index && (
              <CardContent className="pt-0 pb-6">
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}