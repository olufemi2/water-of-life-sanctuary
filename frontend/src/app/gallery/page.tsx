"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const galleryItems = [
  { type: "image", src: "/public/images/events/event1.jpg", alt: "Event 1" },
  { type: "image", src: "/public/images/events/event2.jpg", alt: "Event 2" },
  { type: "image", src: "/public/images/events/event3.jpg", alt: "Event 3" },
  { type: "video", src: "https://www.youtube.com/embed/your-inauguration-video-id", alt: "Inauguration Video" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
          <p className="mt-2 text-lg text-gray-600">
            Explore photos and videos from our church events and special moments.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, idx) => (
            <Card key={idx} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{item.alt}</CardTitle>
              </CardHeader>
              <CardContent>
                {item.type === "image" ? (
                  <img src={item.src} alt={item.alt} className="w-full h-64 object-cover rounded-lg" />
                ) : (
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={item.src}
                      title={item.alt}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-64 rounded-lg"
                    ></iframe>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 