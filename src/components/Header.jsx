import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import img from '../assets/logo1.jpg'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const controls = useAnimation()
  const mobileMenuRef = useRef(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
        controls.start({
          backgroundColor: 'rgba(255, 255, 255, 0.97)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: { duration: 0.3 }
        })
      } else {
        setScrolled(false)
        controls.start({
          backgroundColor: 'rgba(255, 255, 255, 0)',
          backdropFilter: 'blur(0px)',
          boxShadow: 'none',
          transition: { duration: 0.3 }
        })
      }
    }

    // Throttle scroll events for performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll)
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [controls])

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    // { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.3,
        type: "spring",
        stiffness: 120
      }
    }
  }

  // Navigation item animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.3
      }
    })
  }

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3
      }
    }
  }

  return (
    <motion.header
      initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
      animate={controls}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <motion.div
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center"
              >
                <img
                  src={img}
                  alt="NKO Limited Logo"
                  className="h-10 w-auto object-contain"
                />
                <span className="sr-only">NKO Limited</span>
                <div className="ml-3 flex flex-col">
                  <span className="text-xl font-bold text-gray-900">NKO</span>
                  <span className="text-xs font-medium text-orange-600 -mt-1">LIMITED</span>
                </div>
              </motion.div>
            </a>
          </div>
          
          <div className="flex lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </motion.button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                className="text-sm font-semibold leading-6 text-gray-900 relative group py-2"
                whileHover={{ color: "#ea580c" }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="text-sm font-semibold leading-6 text-gray-900 group flex items-center"
              whileHover={{ color: "#ea580c" }}
            >
              Get started 
              <motion.span 
                className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
                aria-hidden="true"
              >
                &rarr;
              </motion.span>
            </motion.a>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu with AnimatePresence for smooth exit animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              ref={mobileMenuRef}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4">
                <a href="#" className="-m-1.5 p-1.5 flex items-center">
                  <img
                    src={img}
                    alt="NKO Limited Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <div className="ml-3 flex flex-col">
                    <span className="text-xl font-bold text-gray-900">NKO</span>
                    <span className="text-xs font-medium text-orange-600 -mt-1">LIMITED</span>
                  </div>
                </a>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>
              <div className="mt-6 flow-root px-6">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                  <div className="py-6">
                    <motion.a
                      href="#contact"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Get started
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header