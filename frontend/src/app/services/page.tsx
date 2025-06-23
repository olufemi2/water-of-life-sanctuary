"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CalendarIcon, UsersIcon, BookOpenIcon, SunIcon, MoonIcon } from "lucide-react";

const services = [
  {
    name: "Sunday Worship Service",
    time: "10:00 AM",
    description: "A vibrant worship experience with music, teaching, and fellowship for all ages.",
    icon: <SunIcon className="w-8 h-8 text-yellow-500" />, color: "bg-yellow-50"
  },
  {
    name: "Midweek Bible Study",
    time: "Wednesday 7:00 PM",
    description: "In-depth study of the Bible and group discussions for spiritual growth.",
    icon: <BookOpenIcon className="w-8 h-8 text-blue-500" />, color: "bg-blue-50"
  },
  {
    name: "Friday Vigils",
    time: "9:00 PM – 1:00 AM",
    description: "Powerful night vigils with prayer, worship, and breakthrough sessions.",
    icon: <MoonIcon className="w-8 h-8 text-purple-600" />, color: "bg-purple-50"
  },
  {
    name: "Children's Church",
    time: "Sundays 10:00 AM",
    description: "Fun, safe, and faith-building activities for children during the main service.",
    icon: <UsersIcon className="w-8 h-8 text-pink-500" />, color: "bg-pink-50"
  },
  {
    name: "Youth Club",
    time: "Monthly Events",
    description: "Engaging programs and events for teenagers to grow in faith and friendship.",
    icon: <UsersIcon className="w-8 h-8 text-green-500" />, color: "bg-green-50"
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
            <Card key={idx} className={`overflow-hidden ${service.color}`}>
              <CardHeader className="flex flex-col items-center">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-center">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
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