import React from 'react'
import { motion } from 'framer-motion'
import { UsersIcon, ChartBarIcon, GlobeAltIcon, HeartIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function About() {
  const stats = [
    { id: 1, name: 'Clients served', value: '250+', icon: UsersIcon },
    { id: 2, name: 'Workforce placed', value: '10,000+', icon: ChartBarIcon },
    { id: 3, name: 'Years of experience', value: '8+', icon: HeartIcon },
    // { id: 4, name: 'Countries covered', value: '12', icon: GlobeAltIcon },
  ]

  const values = [
    {
      name: 'Excellence',
      description: 'We deliver nothing but the highest quality service in all we do.',
      icon: ChartBarIcon,
    },
    {
      name: 'Integrity',
      description: 'Honesty and transparency guide every business decision we make.',
      icon: HeartIcon,
    },
    {
      name: 'Innovation',
      description: 'We constantly evolve to provide cutting-edge workforce solutions.',
      icon: GlobeAltIcon,
    },
    {
      name: 'People First',
      description: 'Our clients and employees are at the heart of everything we do.',
      icon: UsersIcon,
    },
  ]

  const leadership = [
    {
      name: 'Adebayo Okafor',
      role: 'Founder & CEO',
      bio: '20+ years in workforce solutions and business strategy',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      name: 'Ngozi Eze',
      role: 'Chief Operations Officer',
      bio: 'Specializes in operational excellence and process innovation',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Chinedu Adeleke',
      role: 'Director of Client Services',
      bio: 'Leads our client success and relationship management',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
  ]

  // Animation variants
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
      y: -8,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white"
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-800/90"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About <span className="text-orange-200">NKO Limited</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mx-auto mt-4 h-1.5 bg-orange-300 rounded-full"
            />
            <p className="mt-6 text-xl font-medium leading-8 text-orange-100">
              Pioneering workforce solutions since 2008
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-medium text-orange-600 shadow-md hover:bg-gray-50 transition-colors duration-300"
            >
              Our Services
              <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Company Story */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our <span className="text-orange-500">Story</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mx-auto mt-4 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
            />
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-16 lg:flex-row lg:items-center"
          >
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                From Humble Beginnings to Industry Leaders
              </motion.h3>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                Founded in Lagos, NKO Limited began as a boutique staffing agency with a vision to transform how businesses access talent.
              </p>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                Today, we've grown into a full-service workforce solutions provider serving clients across multiple industries. Our journey has been marked by strategic innovation, an unwavering commitment to quality, and deep partnerships with both clients and candidates.
              </p>
              <p className="text-lg leading-8 text-gray-600">
                What sets us apart is our unique blend of local expertise and global perspective, enabling us to deliver tailored solutions that drive real business results.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="NKO Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white z-20">
                  <p className="text-sm font-medium">Our dedicated team at the 2023 annual strategy conference</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              By the <span className="text-orange-500">Numbers</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '140px' }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mx-auto mt-4 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
            />
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Our impact in the workforce solutions industry speaks for itself
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl border border-orange-100 text-center"
                >
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                  <p className="mt-6 text-4xl font-bold text-orange-600">{stat.value}</p>
                  <p className="mt-2 text-lg font-medium text-gray-900">{stat.name}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Core <span className="text-orange-500">Values</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-4 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          />
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            The principles that guide our company culture and service delivery
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => (
            <motion.div
              key={value.name}
              variants={cardVariants}
              whileHover="hover"
              className="group rounded-2xl bg-gradient-to-b from-white to-gray-50 p-8 shadow-lg hover:shadow-xl border border-gray-100 text-center"
            >
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-600 text-white group-hover:bg-orange-700 transition-colors duration-300">
                  <value.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{value.name}</h3>
              <p className="mt-3 text-base leading-7 text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      
      


      
    </motion.div>
  )
}