import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
        controls.start({
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          transition: { duration: 0.3 }
        })
      } else {
        setScrolled(false)
        controls.start({
          backgroundColor: 'rgba(255, 255, 255, 0)',
          boxShadow: 'none',
          transition: { duration: 0.3 }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
      animate={controls}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">NKO Limited</span>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center"
              >
                <span className="text-2xl font-bold text-gray-900">NKO</span>
                <span className="ml-2 text-sm font-medium text-orange-600">LIMITED</span>
              </motion.div>
            </a>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
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
              className="text-sm font-semibold leading-6 text-gray-900"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Get started <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-white"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">NKO Limited</span>
              <span className="text-2xl font-bold text-gray-900">NKO</span>
              <span className="ml-2 text-sm font-medium text-orange-600">LIMITED</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root px-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
export default Header