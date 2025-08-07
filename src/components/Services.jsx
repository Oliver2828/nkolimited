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
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Comprehensive Services
          </h2>
          <p className="mt-6 text-lg font-bold leading-8 text-gray-600">
            NKO Limited provides end-to-end solutions for your staffing and call center needs.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-orange-100 hover:ring-orange-200 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                <service.icon className="h-6 w-6 text-white font-bold" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-extrabold leading-8 text-gray-900">{service.name}</h3>
              <p className="mt-2 text-base font-bold leading-7 text-gray-600">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <svg className="h-5 w-5 flex-shrink-0 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-sm font-bold text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}