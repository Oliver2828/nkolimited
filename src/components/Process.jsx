import React from 'react'
import { motion } from 'framer-motion'

export default function Process() {
  const steps = [
    {
      id: '01',
      name: 'Consultation',
      description: 'We discuss your specific staffing or call center needs and requirements.',
    },
    {
      id: '02',
      name: 'Talent Matching',
      description: 'Our team sources and vets the perfect candidates for your needs.',
    },
    {
      id: '03',
      name: 'Implementation',
      description: 'We handle all onboarding, training, and setup processes.',
    },
    {
      id: '04',
      name: 'Ongoing Support',
      description: 'Continuous management and support to ensure optimal performance.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const stepVariants = {
    hidden: { y: 30, opacity: 0 },
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
      y: -5,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  const connectorVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="process" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
            Our Proven <span className="text-orange-500">Process</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-4 h-0.5 bg-orange-500"
          />
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple, transparent steps to get you the workforce solutions you need.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 relative"
        >
          {/* Horizontal line for mobile */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 top-16 h-full w-0.5 bg-orange-200 -translate-x-1/2 sm:hidden"
          />
          
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                variants={stepVariants}
                whileHover="hover"
                className="relative group"
              >
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 group-hover:bg-orange-100 mb-6 transition-colors duration-300"
                  >
                    <span className="text-xl font-medium text-orange-600">{step.id}</span>
                  </motion.div>
                  <h3 className="text-lg font-medium text-gray-900">{step.name}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                </div>

                {/* Connector arrows */}
                {index !== steps.length - 1 && (
                  <>
                    {/* Mobile connector (vertical) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="absolute top-full left-1/2 h-12 w-0.5 bg-orange-200 -translate-x-1/2 sm:hidden"
                    />
                    
                    {/* Desktop connector (horizontal) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="absolute top-1/2 right-0 hidden h-0.5 w-12 bg-orange-200 translate-x-full sm:block"
                    />
                    
                    {/* Arrow head for desktop */}
                    <motion.svg
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="absolute top-1/2 right-0 hidden h-5 w-5 text-orange-200 -translate-y-1/2 translate-x-[calc(100%+3rem)] sm:block"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}