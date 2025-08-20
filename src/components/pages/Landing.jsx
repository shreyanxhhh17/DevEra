import React from 'react'
import HeroSection from '../Landing/HeroSection'
import StepSection from '../Landing/StepsSection'
import TestimonialSection from '../Landing/Testimonials'
import CallToActionSection from '../Landing/FAQ'
import Footer from '../Landing/Footer'
import AboutUs from '../Landing/AboutUs'

const Landing = () => {
  return (
    <>
      <HeroSection />
      <StepSection />
      <AboutUs/>
      <TestimonialSection/>
      <CallToActionSection/>
      <Footer/>
    </>
  )
}

export default Landing
