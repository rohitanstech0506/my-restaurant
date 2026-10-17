import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Section/HeroSection'
import About from './Section/About'
import States from './Section/States'
import Dishes from './Section/Dishes'
import Features from './Section/Features'
import BookingProcess from './Section/BookingProcess'
import Timing from './Section/Timing'
import TestimonialSection from './Section/TestimonialSection'
import FAQs from './FAQs'
import CallToAction from './CallToAction'
import Footer from './Components/Footer/Footer'
import LenisScroll from './Components/LenisScroll'

const App = () => {
  return (
    <>
    <LenisScroll/>
    <Navbar/>
    <HeroSection/>
    <About/>
    <States/>
    <Dishes/>
    <Features/>
    <BookingProcess/>
    <Timing/>
    <TestimonialSection/>
    <FAQs/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default App