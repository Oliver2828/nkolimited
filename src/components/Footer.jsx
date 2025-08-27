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
      { name: 'About Us', href: '#' },
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

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    ),
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
    y: -5,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 15
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
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 mb-16 shadow-lg"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Stay updated with our latest news
            </h3>
            <p className="mt-4 text-orange-100">
              Subscribe to our newsletter to receive updates on our services and industry insights.
            </p>
            <form className="mt-6 sm:flex max-w-md mx-auto">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/10 px-4 py-3 text-base text-white placeholder-orange-200 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-white px-4 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-orange-600 transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-4"
        >
          {/* Brand and contact info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[url(./assets/logo1.jpg)] bg-no-repeat bg-center bg-cover text-white font-bold text-xl">
                
              </div>
              <span className="ml-3 text-2xl font-bold">NKO</span>
              <span className="ml-1 text-sm font-bold text-orange-400">LIMITED</span>
            </div>
            <p className="mt-6 max-w-md text-lg leading-7 text-gray-300">
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
                  className="flex items-start group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-600 text-white group-hover:bg-orange-500 transition-colors duration-300">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <p className="ml-3 text-base text-gray-300 group-hover:text-white transition-colors duration-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Social media links */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Follow us</h4>
              <div className="mt-4 flex space-x-4">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ y: -3 }}
                    className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-300 hover:bg-orange-600 hover:text-white transition-colors duration-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Navigation links */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2"
          >
            {navigation.map((item) => (
              <motion.div 
                key={item.name}
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold leading-6 text-white">{item.name}</h3>
                <ul className="mt-6 space-y-4">
                  {item.links.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      variants={itemVariants}
                      custom={index}
                      whileHover={{ x: 5 }}
                    >
                      <a 
                        href={link.href} 
                        className="text-base leading-6 text-gray-300 hover:text-orange-400 transition-all duration-200"
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
        
        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base leading-6 text-gray-400">
              &copy; {new Date().getFullYear()} NKO Limited (NELKEVOL CONCEPT Limited). All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}