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
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
            Our Comprehensive <span className="text-orange-500">Services</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-4 h-0.5 bg-orange-500"
          />
          <p className="mt-6 text-lg leading-8 text-gray-600">
            NKO Limited provides end-to-end solutions for your staffing and call center needs.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              whileHover="hover"
              className="group rounded-xl bg-white p-8 shadow-lg hover:shadow-xl border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300"
              >
                <service.icon className="h-6 w-6 text-orange-600" aria-hidden="true" />
              </motion.div>
              
              <h3 className="mt-6 text-lg font-medium text-gray-900">{service.name}</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">{service.description}</p>
              
              <ul className="mt-6 space-y-3">
                {service.items.map((item, i) => (
                  <motion.li 
                    key={item}
                    custom={i}
                    variants={listItemVariants}
                    className="flex items-center"
                  >
                    <svg className="h-5 w-5 flex-shrink-0 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-sm text-gray-600">{item}</span>
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