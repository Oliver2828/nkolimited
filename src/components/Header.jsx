import React from 'react'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    // { name: 'About', href: '#' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-3" aria-label="Top">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-extrabold text-orange-700">NKO</span>
              <span className="ml-2 text-sm font-bold text-orange-500">LIMITED</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:flex">
            <a
              href="#contact"
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-700 shadow-sm transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-orange-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 font-bold" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6 font-bold" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2 pb-3">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block rounded-lg bg-orange-600 px-3 py-2 text-base font-bold text-white text-center hover:bg-orange-700 transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}