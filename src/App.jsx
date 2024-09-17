import { useState } from 'react'
import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Benefits from './Components/Benefits'
import Collaboration from './Components/Collaboration'
import Services from './Components/Services'
import Pricing from './Components/Pricing'
import Roadmap from './Components/Roadmap'
import Footer from './Components/Footer'
function App() {
  return (
    <>
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Header/>
      <HeroSection/>
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
    </div>
     <ButtonGradient/>
    </>
  )
}

export default App
