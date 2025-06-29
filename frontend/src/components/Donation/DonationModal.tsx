'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/Button'
import { ClockIcon, CreditCardIcon, HeartIcon } from '@heroicons/react/24/outline'

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Online Giving</DialogTitle>
        </DialogHeader>

        <div className="text-center space-y-6 py-4">
          {/* Coming Soon Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
            <ClockIcon className="h-8 w-8 text-purple-600" />
          </div>

          {/* Main Message */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Coming Soon!</h3>
            <p className="text-gray-600">
              We&apos;re currently developing a secure online giving platform to make it easier for you to support our ministry.
            </p>
          </div>

          {/* Features Preview */}
          <div className="space-y-3 text-left bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 text-center mb-3">What to expect:</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <CreditCardIcon className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Secure online payments</span>
              </div>
              <div className="flex items-center space-x-3">
                <HeartIcon className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Multiple giving categories (Tithe, Missions, Building Fund)</span>
              </div>
              <div className="flex items-center space-x-3">
                <ClockIcon className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">One-time and recurring donations</span>
              </div>
            </div>
          </div>

          {/* Alternative Giving Methods */}
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-900 mb-2">Give Today</h4>
            <p className="text-sm text-gray-600 mb-3">
              In the meantime, you can still support our ministry:
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700">• Bring your offering during Sunday service</p>
              <p className="text-gray-700">• Contact our office for bank transfer details</p>
              <p className="text-gray-700">• Speak with Pastor Yomi Ogunlesi or Pastor Kunle Solaru</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-purple-50 rounded-lg p-3">
            <p className="text-sm text-purple-800">
              Questions about giving? Email us at{' '}
              <a href="mailto:info@wateroflifesanctuary.org.uk" className="font-medium hover:underline">
                info@wateroflifesanctuary.org.uk
              </a>
            </p>
          </div>

          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}