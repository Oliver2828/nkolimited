import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  }

  const secondaryButtonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  }

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-orange-700 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="overflow-hidden">
          <motion.div className="overflow-hidden">
            <motion.h2 
              variants={textReveal}
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              Ready to transform your workforce strategy?
            </motion.h2>
          </motion.div>
          
          <motion.div className="overflow-hidden mt-6">
            <motion.p
              variants={textReveal}
              className="max-w-3xl text-lg font-bold leading-8 text-white"
            >
              Get in touch with our team to discuss how NKO Limited can support your business growth with our premium staffing and call center solutions.
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-10 flex items-center gap-x-6 lg:mt-0"
        >
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            href="#contact"
            className="flex items-center gap-x-2 rounded-lg bg-white px-6 py-3.5 text-lg font-extrabold text-orange-700 shadow-lg hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact Us
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowRightIcon className="h-5 w-5 text-orange-700" />
            </motion.span>
          </motion.a>
          
          <motion.a
            variants={secondaryButtonVariants}
            whileHover="hover"
            href="#services" 
            className="text-lg font-bold leading-6 text-white hover:text-orange-200"
          >
            Learn more <span aria-hidden="true" className="inline-block">→</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}