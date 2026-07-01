import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Pains from './components/Pains'
import MetodoPPR from './components/MetodoPPR'
import HowItWorks from './components/HowItWorks'
import WhatYouLearn from './components/WhatYouLearn'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import About from './components/About'
import BeforeAfter from './components/BeforeAfter'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Pains />
      <MetodoPPR />
      <HowItWorks />
      <WhatYouLearn />
      <Results />
      <Testimonials />
      <About />
      <BeforeAfter />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
