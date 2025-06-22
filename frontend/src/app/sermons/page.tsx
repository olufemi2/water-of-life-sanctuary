'use client'

import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { MagnifyingGlassIcon, PlayIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import sermonsData from '@/lib/data/sermons.json'

interface Sermon {
  id: string
  title: string
  speaker: string
  date: string
  series: string
  scripture: string
  description: string
  videoUrl: string
  audioUrl: string
  notesUrl: string
  thumbnail: string
  duration: string
  tags: string[]
}

export default function SermonsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSeries, setSelectedSeries] = useState('all-series')
  const [selectedSpeaker, setSelectedSpeaker] = useState('all-speakers')

  const sermons: Sermon[] = sermonsData

  const series = Array.from(new Set(sermons.map(sermon => sermon.series)))
  const speakers = Array.from(new Set(sermons.map(sermon => sermon.speaker)))

  const filteredSermons = useMemo(() => {
    return sermons.filter(sermon => {
      const matchesSearch = searchTerm === '' || 
        sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesSeries = selectedSeries === '' || selectedSeries === 'all-series' || sermon.series === selectedSeries
      const matchesSpeaker = selectedSpeaker === '' || selectedSpeaker === 'all-speakers' || sermon.speaker === selectedSpeaker

      return matchesSearch && matchesSeries && matchesSpeaker
    })
  }, [sermons, searchTerm, selectedSeries, selectedSpeaker])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Sermon Archive</h1>
          <p className="mt-2 text-lg text-gray-600">
            Watch, listen, and download past sermons and teaching series
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-4">
              {/* Search */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search Sermons
                </label>
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by title, topic, or keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Series Filter */}
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-1">
                  Series
                </Label>
                <Select value={selectedSeries} onValueChange={setSelectedSeries}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Series" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-series">All Series</SelectItem>
                    {series.map(seriesName => (
                      <SelectItem key={seriesName} value={seriesName}>{seriesName}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Speaker Filter */}
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-1">
                  Speaker
                </Label>
                <Select value={selectedSpeaker} onValueChange={setSelectedSpeaker}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Speakers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-speakers">All Speakers</SelectItem>
                    {speakers.map(speaker => (
                      <SelectItem key={speaker} value={speaker}>{speaker}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Clear Filters */}
            {(searchTerm || (selectedSeries && selectedSeries !== 'all-series') || (selectedSpeaker && selectedSpeaker !== 'all-speakers')) && (
              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedSeries('all-series')
                    setSelectedSpeaker('all-speakers')
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredSermons.length} of {sermons.length} sermons
          </p>
        </div>

        {/* Sermon Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSermons.map((sermon) => (
            <Card key={sermon.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-sm">
                  {sermon.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                    <PlayIcon className="w-6 h-6 text-blue-600 ml-1" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{formatDate(sermon.date)}</span>
                    <Badge variant="secondary">
                      {sermon.series}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">{sermon.title}</CardTitle>
                  <p className="text-sm text-gray-600">{sermon.speaker}</p>
                  <p className="text-sm font-medium text-blue-600">{sermon.scripture}</p>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {sermon.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {sermon.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                  {sermon.tags.length > 3 && (
                    <span className="text-gray-500 text-xs px-2 py-1">
                      +{sermon.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button className="w-full" size="sm">
                    <PlayIcon className="w-4 h-4 mr-2" />
                    Watch Sermon
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      Listen
                    </Button>
                    <Button variant="outline" size="sm">
                      <DocumentArrowDownIcon className="w-4 h-4 mr-1" />
                      Notes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredSermons.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No sermons found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or clearing the filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('')
                setSelectedSeries('all-series')
                setSelectedSpeaker('all-speakers')
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}