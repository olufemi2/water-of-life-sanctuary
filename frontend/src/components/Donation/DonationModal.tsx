'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface DonationForm {
  amount: number
  frequency: 'one-time' | 'monthly'
  category: string
  email: string
}

const donationCategories = [
  { id: 'tithe', name: 'Tithe & Offerings', description: 'General church operations' },
  { id: 'missions', name: 'Missions', description: 'Global outreach and missions' },
  { id: 'building', name: 'Building Fund', description: 'Church facility improvements' },
  { id: 'youth', name: 'Youth Ministry', description: 'Youth programs and activities' },
]

const suggestedAmounts = [25, 50, 100, 250, 500]

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<DonationForm>({
    amount: 0,
    frequency: 'one-time',
    category: 'tithe',
    email: '',
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert(`Thank you for your $${form.amount} ${form.frequency} donation to ${donationCategories.find(c => c.id === form.category)?.name}! In a real implementation, this would redirect to Stripe checkout.`)
      onClose()
      setForm({ amount: 0, frequency: 'one-time', category: 'tithe', email: '' })

    } catch (error) {
      console.error('Donation error:', error)
      alert('There was an error processing your donation. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Make a Donation</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label>Donation Amount</Label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {suggestedAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={form.amount === amount ? "default" : "outline"}
                  onClick={() => setForm({ ...form, amount })}
                >
                  ${amount}
                </Button>
              ))}
            </div>
            <Input
              type="number"
              placeholder="Other amount"
              value={form.amount || ''}
              onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Frequency</Label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {[
                { value: 'one-time', label: 'One-time' },
                { value: 'monthly', label: 'Monthly' },
              ].map((option) => (
                <Button
                  key={option.value}
                  type="button"
                  variant={form.frequency === option.value ? "default" : "outline"}
                  onClick={() => setForm({ ...form, frequency: option.value as 'one-time' | 'monthly' })}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label>Donation Category</Label>
            <Select value={form.category} onValueChange={(value) => setForm({ ...form, category: value })}>
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {donationCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Email Address</Label>
            <Input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className="mt-2"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!form.amount || !form.email || isProcessing}
          >
            {isProcessing ? 'Processing...' : `Donate $${form.amount}`}
          </Button>
        </form>

        <p className="mt-4 text-xs text-muted-foreground text-center">
          Your donation is secure and encrypted. You'll receive an email receipt.
        </p>
      </DialogContent>
    </Dialog>
  )
}