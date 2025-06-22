'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { WoodCross } from '@/components/ui/WoodCross'
import { useTheme } from '@/contexts/ThemeContext'
import { ChevronRightIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

interface ServiceTime {
  day: string
  time: string
  type: string
}

const serviceTimes: ServiceTime[] = [
  { day: 'Sunday', time: '10:40 AM', type: 'Main Service' },
  { day: 'Sunday', time: '10:40 AM', type: 'Children\'s Church' },
  { day: 'Monthly', time: 'Various', type: 'Youth Club' },
]

export const HeroSection: React.FC = () => {
  const { variant, theme } = useTheme()
  
  const getHeroStyles = () => {
    if (variant === 'brutalist') {
      return {
        container: `relative bg-background text-foreground border-8 border-primary ${theme === 'dark' ? 'shadow-[20px_20px_0px_hsl(var(--accent))]' : 'shadow-[20px_20px_0px_hsl(var(--secondary))'}`,
        overlay: 'absolute inset-0 bg-accent/10',
        title: 'text-4xl font-black tracking-tighter sm:text-5xl lg:text-7xl uppercase transform -skew-x-2',
        subtitle: 'text-2xl font-black tracking-tight uppercase text-accent transform skew-x-1'
      }
    }
    
    return {
      container: 'relative bg-gradient-to-br from-church-primary/90 via-church-primary/70 to-accent/80 text-white',
      overlay: 'absolute inset-0 bg-black/20',
      title: 'text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl',
      subtitle: 'block text-church-secondary'
    }
  }

  const styles = getHeroStyles()

  return (
    <section className={styles.container}>
      <div className={styles.overlay}></div>
      
      {/* Wood Cross positioned at top center */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <WoodCross size="lg" className="opacity-80" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={styles.title}>
            {variant === 'brutalist' ? (
              <>
                FAITH GROWS HERE
                <span className={styles.subtitle}>WATER OF LIFE SANCTUARY</span>
              </>
            ) : (
              <>
                Welcome Home to
                <span className={styles.subtitle}>Water of Life Sanctuary</span>
              </>
            )}
          </h1>
          
          <p className={`mx-auto mt-6 max-w-2xl text-xl leading-8 ${
            variant === 'brutalist' 
              ? 'text-muted-foreground font-bold uppercase tracking-wide' 
              : 'text-blue-100'
          }`}>
            {variant === 'brutalist' 
              ? 'COMMUNITY • WORSHIP • SERVICE • LOVE' 
              : 'A place where faith grows, community thrives, and everyone belongs. Join us as we worship together and serve our community with love.'
            }
          </p>

          <div className={`mt-10 grid gap-4 sm:grid-cols-3 ${
            variant === 'brutalist' ? 'transform rotate-1' : ''
          }`}>
            {serviceTimes.map((service, index) => (
              <div key={index} className={
                variant === 'brutalist' 
                  ? `bg-primary text-primary-foreground p-6 border-4 border-accent transform ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'} hover:rotate-0 transition-transform` 
                  : 'rounded-lg bg-white/10 backdrop-blur-sm p-4'
              }>
                <div className="flex items-center justify-center space-x-2">
                  <ClockIcon className={`h-5 w-5 ${
                    variant === 'brutalist' ? 'text-accent' : 'text-amber-400'
                  }`} />
                  <span className={`font-semibold ${
                    variant === 'brutalist' ? 'uppercase tracking-wider' : ''
                  }`}>{service.day}</span>
                </div>
                <div className={`mt-1 text-xl font-bold ${
                  variant === 'brutalist' ? 'text-2xl font-black' : ''
                }`}>{service.time}</div>
                <div className={`text-sm ${
                  variant === 'brutalist' ? 'text-muted uppercase font-bold' : 'text-blue-100'
                }`}>{service.type}</div>
              </div>
            ))}
          </div>

          <div className={`mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center ${
            variant === 'brutalist' ? 'transform -rotate-1' : ''
          }`}>
            <Button 
              size="lg" 
              className={
                variant === 'brutalist'
                  ? 'bg-accent text-accent-foreground hover:bg-accent/80 focus-visible:ring-accent group border-4 border-primary font-black uppercase tracking-wider transform hover:scale-105 transition-all'
                  : 'bg-amber-500 text-white hover:bg-amber-600 focus-visible:ring-amber-500 group'
              }
              onClick={() => window.location.href = '/plan-visit'}
            >
              {variant === 'brutalist' ? 'JOIN US NOW!' : 'Plan Your Visit'}
              <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className={
                variant === 'brutalist'
                  ? 'bg-secondary text-secondary-foreground border-4 border-primary hover:bg-secondary/80 font-black uppercase tracking-wider transform hover:scale-105 transition-all'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              }
              onClick={() => window.location.href = '/sermons'}
            >
              {variant === 'brutalist' ? 'WATCH NOW!' : 'Watch Latest Sermon'}
            </Button>
          </div>

          <div className={`mt-8 flex items-center justify-center space-x-2 ${
            variant === 'brutalist' 
              ? 'text-muted-foreground font-bold uppercase tracking-wider' 
              : 'text-blue-100'
          }`}>
            <MapPinIcon className="h-5 w-5" />
            <span>The Kings Centre Simpson, Milton Keynes MK6 3AL</span>
          </div>
        </div>
      </div>
    </section>
  )
}