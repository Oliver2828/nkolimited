import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid';

export default function CTA() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  // Animation variants for cleaner code organization
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const secondaryButtonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      x: 8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12
      }
    }
  };

  const iconPulse = {
    animate: {
      x: [0, 5, 0],
      transition: {
        repeat: Infinity,
        duration: 1.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative bg-gradient-to-r from-orange-600 to-orange-700 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="lg:max-w-2xl">
          <motion.div className="overflow-hidden">
            <motion.h2 
              variants={textReveal}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              Ready to Transform Your Workforce Strategy?
            </motion.h2>
          </motion.div>
          
          <motion.div className="overflow-hidden mt-6">
            <motion.p
              variants={textReveal}
              className="max-w-3xl text-xl leading-8 text-orange-100"
            >
              Get in touch with our team to discuss how NKO Limited can support your business growth with our premium staffing and call center solutions.
            </motion.p>
          </motion.div>

          {/* Additional features list */}
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-6 text-orange-100"
            variants={textReveal}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <PhoneIcon className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="ml-3 font-medium">24/7 Support</p>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="ml-3 font-medium">Expert Consultation</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-6 lg:mt-0 lg:flex-col lg:items-end"
          variants={buttonVariants}
        >
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setIsButtonHovered(true)}
            onHoverEnd={() => setIsButtonHovered(false)}
            href="#contact"
            className="group flex items-center gap-x-3 rounded-lg bg-white px-8 py-4 text-lg font-extrabold text-orange-700 shadow-lg hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition-colors duration-300"
            aria-label="Contact us for workforce solutions"
          >
            Contact Us
            <motion.span
              animate={isButtonHovered ? { x: [0, 5, 0] } : { x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <ArrowRightIcon className="h-5 w-5 text-orange-700 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.span>
          </motion.a>
          
          <motion.a
            variants={secondaryButtonVariants}
            whileHover="hover"
            href="#services" 
            className="group inline-flex items-center text-lg font-bold leading-6 text-white hover:text-orange-200 transition-colors duration-300"
            aria-label="Learn more about our services"
          >
            Learn more 
            <span 
              aria-hidden="true" 
              className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}