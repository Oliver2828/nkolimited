import React from 'react'
import { motion } from 'framer-motion'
import { UsersIcon, ChartBarIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function About() {
  const stats = [
    { id: 1, name: 'Clients served', value: '250+' },
    { id: 2, name: 'Workforce placed', value: '10,000+' },
    { id: 3, name: 'Years of experience', value: '15+' },
    { id: 4, name: 'Countries covered', value: '12' },
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white"
    >
      {/* Hero Section */}
      <div className="relative bg-orange-600">
        <div className="absolute inset-0 bg-[url('/src/assets/grid-pattern.svg')] bg-[length:64px_64px] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About NKO Limited
            </h1>
            <p className="mt-6 text-lg font-bold leading-8 text-orange-100">
              Pioneering workforce solutions since 2008
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Story */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Story
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-col gap-y-20 lg:flex-row lg:items-center"
          >
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl font-bold leading-8 text-gray-600">
                Founded in Lagos in 2008, NKO Limited began as a boutique staffing agency with a vision to transform how businesses access talent.
              </p>
              <p className="mt-6 text-base font-bold leading-7 text-gray-600">
                Today, we've grown into a full-service workforce solutions provider serving clients across multiple industries in 12 countries. Our journey has been marked by strategic innovation, an unwavering commitment to quality, and deep partnerships with both clients and candidates.
              </p>
              <p className="mt-6 text-base font-bold leading-7 text-gray-600">
                What sets us apart is our unique blend of local expertise and global perspective, enabling us to deliver tailored solutions that drive real business results.
              </p>
            </div>
            <div className="lg:flex-shrink-0 lg:flex-grow">
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="NKO Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-orange-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:max-w-none"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              By the numbers
            </h2>
            <p className="mt-6 text-lg font-bold leading-8 text-gray-600">
              Our impact in the workforce solutions industry
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5
                    }
                  }
                }}
                className="rounded-2xl bg-white p-8 shadow-lg"
              >
                <p className="text-3xl font-extrabold text-orange-600">{stat.value}</p>
                <p className="mt-2 text-base font-bold text-gray-900">{stat.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-lg font-bold leading-8 text-gray-600"
          >
            The principles that guide our company culture and service delivery
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => (
              <motion.div
                key={value.name}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5
                    }
                  }
                }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 text-white">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-extrabold text-gray-900">{value.name}</h3>
                <p className="mt-2 text-base font-bold text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Leadership */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:max-w-none"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-6 text-lg font-bold leading-8 text-gray-600">
              The experienced professionals guiding NKO Limited's vision
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
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
            ].map((person, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5
                    }
                  }
                }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-white p-8 shadow-lg"
              >
                <img className="h-48 w-full rounded-lg object-cover" src={person.image} alt={person.name} />
                <h3 className="mt-6 text-lg font-extrabold text-gray-900">{person.name}</h3>
                <p className="text-base font-bold text-orange-600">{person.role}</p>
                <p className="mt-2 text-sm font-bold text-gray-600">{person.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}