import React from 'react'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const navigation = [
  {
    name: 'Services',
    links: [
      { name: 'Staffing Solutions', href: '#' },
      { name: 'Call Center Outsourcing', href: '#' },
      { name: 'Payment Management', href: '#' },
      { name: 'Workforce Management', href: '#' },
    ],
  },
  {
    name: 'Company',
    links: [
    //   { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
  },
  {
    name: 'Legal',
    links: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
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

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center">
              <span className="text-2xl font-extrabold">NKO</span>
              <span className="ml-2 text-sm font-bold text-orange-400">LIMITED</span>
            </div>
            <p className="mt-6 max-w-xs text-sm font-bold leading-6 text-gray-300">
              Premium workforce solutions and call center outsourcing for forward-thinking businesses.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: MapPinIcon,
                  text: '123 Business Avenue, Lagos, Nigeria'
                },
                {
                  icon: PhoneIcon,
                  text: '+234 905 692 5668'
                },
                {
                  icon: EnvelopeIcon,
                  text: 'info@nkolimited.com'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-orange-600 text-white">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <p className="ml-3 text-sm font-bold text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2"
          >
            {navigation.map((item) => (
              <motion.div 
                key={item.name}
                variants={itemVariants}
              >
                <h3 className="text-sm font-extrabold leading-6 text-white">{item.name}</h3>
                <ul className="mt-6 space-y-3">
                  {item.links.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      variants={itemVariants}
                      custom={index}
                      whileHover={{ x: 5 }}
                    >
                      <a 
                        href={link.href} 
                        className="text-sm font-bold leading-6 text-gray-300 hover:text-orange-400 transition-all duration-200"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24"
        >
          <p className="text-sm font-bold leading-6 text-gray-400">
            &copy; {new Date().getFullYear()} NKO Limited (NELKEVOL CONCEPT Limited). All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}