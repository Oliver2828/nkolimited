import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

export default function CTA() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-orange-600"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to transform your workforce strategy?
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 max-w-3xl text-lg font-bold leading-8 text-orange-100"
          >
            Get in touch with our team to discuss how NKO Limited can support your business growth with our premium staffing and call center solutions.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center gap-x-6 lg:mt-0"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="flex items-center gap-x-2 rounded-lg bg-white px-6 py-3.5 text-lg font-extrabold text-orange-600 shadow-lg hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
          >
            Contact Us
            <ArrowRightIcon className="h-5 w-5" />
          </motion.a>
          
          <motion.a
            whileHover={{ x: 5 }}
            href="#services" 
            className="text-lg font-bold leading-6 text-white hover:text-orange-100 transition-all duration-200"
          >
            Learn more <span aria-hidden="true" className="inline-block ml-1">→</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}