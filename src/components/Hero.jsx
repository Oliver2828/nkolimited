import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-800 to-orange-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0zMiAxNnYzMm0xNi0xNkgxNk0zMiAwaDMydjMySDMyem0wIDY0aDMydi0zMkgzMnptLTMyIDBoMzJ2LTMySDB6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPjwvZz48L3N2Zz4=')] bg-[length:64px_64px]"></div>
      </motion.div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-12 lg:px-8 lg:py-40">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mb-6 flex items-center gap-x-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white ring-1 ring-inset ring-white/20 w-max"
          >
            <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse"></span>
            Transforming workforce solutions
          </motion.div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Premium Workforce
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
            >
              Solutions & Outsourcing
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg font-bold leading-8 text-orange-100 max-w-2xl"
          >
            Connecting exceptional talent with forward-thinking companies through our comprehensive staffing and call management services.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="flex items-center gap-x-2 rounded-lg bg-orange-600 px-6 py-3.5 text-lg font-bold text-white shadow-lg hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-all duration-200"
            >
              Our Services
              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="rounded-lg bg-white px-6 py-3.5 text-lg font-bold text-orange-600 shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
            >
              Contact Us
            </motion.a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex items-center gap-x-8"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3].map((item) => (
                <motion.img
                  key={item}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="h-12 w-12 rounded-full border-2 border-white object-cover"
                  src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                  alt="Client"
                />
              ))}
            </div>
            <div className="text-sm font-bold leading-6 text-orange-100">
              <p>Trusted by 100+ companies</p>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2">5.0 rating</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 lg:mt-0 lg:w-1/2 relative"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative aspect-[5/4] w-full rounded-3xl bg-gray-900/5 shadow-2xl ring-1 ring-gray-900/10 overflow-hidden lg:aspect-[5/3]"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Professional team"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-orange-900/20 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero