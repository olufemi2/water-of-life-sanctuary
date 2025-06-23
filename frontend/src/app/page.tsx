import { HeroSection } from '@/components/Homepage/HeroSection'
import { WelcomeSection } from '@/components/Homepage/WelcomeSection'
import { PastorWelcome } from '@/components/Homepage/PastorWelcome'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <PastorWelcome />
    </div>
  )
}
