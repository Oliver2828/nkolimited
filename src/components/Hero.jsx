import React from 'react'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[200%] w-[200%] -translate-x-1/2 bg-gradient-to-br from-orange-50 to-white opacity-70" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-6"
        >
          Workforce solutions <span className="text-orange-500">reimagined</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We help businesses build exceptional teams through innovative staffing and management solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors"
          >
            Get started
          </a>
          <a
            href="#services"
            className="px-8 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Learn more
          </a>
        </motion.div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
export default Hero