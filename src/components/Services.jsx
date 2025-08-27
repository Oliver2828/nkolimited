import React from 'react'
import { BriefcaseIcon, PhoneIcon, BanknotesIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const services = [
  {
    name: 'Staffing Solutions',
    description: 'We source, vet, and provide qualified professionals tailored to your specific industry needs.',
    icon: BriefcaseIcon,
    items: [
      'Worker sourcing/recruitment',
      'Payroll management',
      'HR administration',
      'Compliance management'
    ]
  },
  {
    name: 'Call Center Outsourcing',
    description: 'Professional call handling services to enhance your customer experience and business growth.',
    icon: PhoneIcon,
    items: [
      'Inbound/outbound call handling',
      'Customer support',
      'Lead generation',
      'Multilingual services'
    ]
  },
  {
    name: 'Payment Management',
    description: 'Streamlined payroll solutions for your outsourced workforce.',
    icon: BanknotesIcon,
    items: [
      'Timely salary payments',
      'Tax compliance',
      'Payment tracking',
      'Dedicated support'
    ]
  },
  {
    name: 'Workforce Management',
    description: 'Comprehensive solutions to manage your extended team effectively.',
    icon: UserGroupIcon,
    items: [
      'Performance monitoring',
      'Shift scheduling',
      'Quality assurance',
      'Reporting & analytics'
    ]
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

const cardVariants = {
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
    y: -8,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
}

const listItemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1 + 0.4
    }
  }),
  hover: {
    x: 5,
    transition: { duration: 0.2 }
  }
}

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our <span className="text-orange-500">Comprehensive</span> Services
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '140px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-4 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          />
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            NKO Limited provides end-to-end solutions for your staffing and call center needs, ensuring efficiency and quality at every step.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              whileHover="hover"
              className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-orange-50 group-hover:to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              
              <div className="relative z-10">
                {/* Icon container with gradient background */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 group-hover:from-orange-100 group-hover:to-orange-200 shadow-md transition-all duration-300"
                >
                  <service.icon className="h-8 w-8 text-orange-600" aria-hidden="true" />
                </motion.div>
                
                {/* Service title */}
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.name}</h3>
                
                {/* Service description */}
                <p className="mt-3 text-base leading-7 text-gray-600">{service.description}</p>
                
                {/* Service features list */}
                <ul className="mt-6 space-y-3 border-t border-gray-100 pt-4">
                  {service.items.map((item, i) => (
                    <motion.li 
                      key={item}
                      custom={i}
                      variants={listItemVariants}
                      className="flex items-start"
                    >
                      <svg className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3 text-sm text-gray-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Learn more link (hidden until hover) */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-6 flex items-center text-orange-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn more
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-white">Ready to transform your business operations?</h3>
            <p className="mt-2 text-orange-100 max-w-2xl mx-auto">
              Get in touch with our experts to discover how our services can help your business grow.
            </p>
            <button className="mt-6 bg-white text-orange-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}