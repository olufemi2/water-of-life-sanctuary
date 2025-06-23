"use client"

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";

export default function PrayerRequestPage() {
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Integrate backend/email service
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
                  placeholder="Message Details"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
                <Button type="submit" className="w-full">Submit</Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 