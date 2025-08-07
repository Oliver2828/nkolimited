import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
// import About from './components/About'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact' // Add this line
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        {/* <About /> */}
        {/* <Testimonials /> */}
        <Contact /> 
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App