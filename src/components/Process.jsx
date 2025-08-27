import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function Process() {
  const steps = [
    {
      id: '01',
      name: 'Consultation',
      description: 'We discuss your specific staffing or call center needs and requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: '02',
      name: 'Talent Matching',
      description: 'Our team sources and vets the perfect candidates for your needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: '03',
      name: 'Implementation',
      description: 'We handle all onboarding, training, and setup processes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: '04',
      name: 'Ongoing Support',
      description: 'Continuous management and support to ensure optimal performance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const stepVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  const connectorVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="process" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our <span className="text-orange-500">Proven</span> Process
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '140px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-4 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          />
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Simple, transparent steps to get you the workforce solutions you need with efficiency and precision.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Progress line */}
          <div className="absolute left-0 right-0 top-12 hidden lg:flex items-center">
            <div className="flex-1 h-1 bg-gray-200 mx-24"></div>
            <div className="flex-1 h-1 bg-gray-200 mx-24"></div>
            <div className="flex-1 h-1 bg-gray-200 mx-24"></div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                variants={stepVariants}
                whileHover="hover"
                className="relative group"
              >
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 h-full relative z-10">
                  {/* Step number with gradient background */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-lg shadow-md"
                    >
                      {step.id}
                    </motion.div>
                  </div>
                  
                  {/* Icon container */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 mb-6 mt-4">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{step.description}</p>
                </div>

                {/* Connector arrows for desktop */}
                {index !== steps.length - 1 && (
                  <motion.div
                    variants={connectorVariants}
                    className="hidden lg:flex absolute top-1/2 right-0 items-center justify-center w-full -translate-y-1/2 translate-x-full z-0"
                  >
                    <div className="h-0.5 w-16 bg-gradient-to-r from-orange-400 to-orange-200"></div>
                    <div className="bg-orange-500 p-1 rounded-full">
                      <ArrowLongRightIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="h-0.5 w-16 bg-gradient-to-l from-orange-400 to-orange-200"></div>
                  </motion.div>
                )}

                {/* Mobile connector */}
                {index !== steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 40 }}
                    transition={{ delay: 0.5 }}
                    className="lg:hidden flex flex-col items-center justify-center mt-4 mb-4"
                  >
                    <div className="h-8 w-0.5 bg-gradient-to-b from-orange-400 to-orange-200"></div>
                    <div className="bg-orange-500 p-1 rounded-full -mt-1">
                      <svg className="h-5 w-5 text-white rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-white">Ready to get started?</h3>
            <p className="mt-2 text-orange-100 max-w-2xl mx-auto">
              Begin your journey with us today and experience our seamless process firsthand.
            </p>
            <button className="mt-6 bg-white text-orange-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300">
              Start Your Project
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}