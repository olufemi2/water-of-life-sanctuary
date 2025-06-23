"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const services = [
  {
    name: "Sunday Worship Service",
    time: "10:40 AM",
    description: "A vibrant worship experience with music, teaching, and fellowship for all ages."
  },
  {
    name: "Children's Church",
    time: "10:40 AM (Sundays)",
    description: "Fun, safe, and faith-building activities for children during the main service."
  },
  {
    name: "Youth Club",
    time: "Monthly Events",
    description: "Engaging programs and events for teenagers to grow in faith and friendship."
  },
  {
    name: "Midweek Bible Study",
    time: "Wednesdays 7:00 PM",
    description: "In-depth study of the Bible and group discussions for spiritual growth."
  },
  {
    name: "Prayer Meeting",
    time: "Fridays 7:00 PM",
    description: "A time of corporate prayer and intercession for our church and community."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover our regular services and what you can expect when you join us.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Card key={idx} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold mb-2">{service.time}</p>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 