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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="process" className="bg-orange-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Proven Process
          </h2>
          <p className="mt-6 text-lg font-bold leading-8 text-gray-600">
            Simple, transparent steps to get you the workforce solutions you need.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, stepIdx) => (
              <motion.div
                key={step.name}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg">
                    {step.id}
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold leading-8 text-gray-900">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-base font-bold leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
                {stepIdx !== steps.length - 1 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute top-16 right-0 hidden h-full w-28 translate-x-12 sm:block"
                  >
                    <svg
                      viewBox="0 0 200 80"
                      fill="none"
                      stroke="currentColor"
                      className="text-orange-200"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 40H180"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="1, 6"
                      />
                    </svg>
                  </motion.div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}