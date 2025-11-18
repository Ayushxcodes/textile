import BackgroundContent from '@/components/Landing/BackgroundContent'
import Hero from '@/components/Landing/HeroSection'
import TextileObjectiveSection from '@/components/Landing/ObjectiveSection'
import SlidingBanner from '@/components/Landing/SlidingBanner'
import VisionSection from '@/components/Landing/VisionSection'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <SlidingBanner />
      <BackgroundContent />
      <TextileObjectiveSection
        imageUrl="/bg-4.jpg"
        imageAlt="Textile conference background"
      />
      <VisionSection />
    </div>
  );
}

export default Homepage