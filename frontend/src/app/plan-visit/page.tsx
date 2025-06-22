import React from 'react'
import { WelcomeVideo } from '@/components/PlanVisit/WelcomeVideo'
import { WhatToExpect } from '@/components/PlanVisit/WhatToExpect'
import { FAQSection } from '@/components/PlanVisit/FAQSection'
import { FamilyInfo } from '@/components/PlanVisit/FamilyInfo'
import { ContactForm } from '@/components/PlanVisit/ContactForm'

export default function PlanVisitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Plan Your Visit</h1>
          <p className="mt-2 text-lg text-gray-600">
            We're excited to welcome you to our church family!
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <WelcomeVideo />
          <WhatToExpect />
          <FamilyInfo />
          <FAQSection />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}