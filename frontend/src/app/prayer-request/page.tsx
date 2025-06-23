"use client"

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";

const REQUEST_TYPES = [
  { value: "prayer", label: "Prayer Request" },
  { value: "testimony", label: "Testimony" },
];

export default function PrayerRequestPage() {
  const [form, setForm] = useState({
    type: "prayer",
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Integrate backend/email service to send to info@wateroflifesanctuary.org.uk
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Prayer Request & Testimony</h1>
          <p className="mt-2 text-lg text-gray-600">
            Share your prayer requests or testimonies with us. We would love to pray with you and celebrate what God has done!
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Submit Your Request or Testimony</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-green-600 font-semibold text-center py-8">
                Thank you for sharing! We will pray with you and celebrate your testimony.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
                  >
                    {REQUEST_TYPES.map((option) => (
                      <option key={option.value} value={option.value} className="text-gray-900 dark:text-white bg-white dark:bg-gray-900">{option.label}</option>
                    ))}
                  </select>
                </div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="title"
                  placeholder="Message Title"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder={form.type === "prayer" ? "Type your prayer request here..." : "Type your testimony here..."}
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
                <Button
                  type="submit"
                  className="mx-auto block bg-primary text-white hover:bg-primary/90 text-base font-bold py-3 px-8 mt-6 shadow-lg z-10 rounded-md"
                  style={{ position: 'relative', minWidth: '160px' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 