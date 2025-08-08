import React, { useState } from 'react'
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/your-formspree-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const infoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  }

  const inputFocusVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(234, 88, 12, 0.5)",
      transition: { duration: 0.2 }
    }
  }

  const buttonHoverVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 4px 12px rgba(234, 88, 12, 0.3)",
      transition: { 
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    tap: {
      scale: 0.98
    }
  }

  const successVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  return (
    <section id="contact" className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2 
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg font-bold leading-8 text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have questions about our services? Reach out to our team—we're here to help.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-2xl bg-orange-50 p-8 shadow-xl"
          >
            <motion.h3 
              className="text-xl font-extrabold text-gray-900"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            <motion.p 
              className="mt-4 font-bold text-gray-600"
              variants={itemVariants}
            >
              Fill out the form or contact us directly through these channels.
            </motion.p>

            <motion.div 
              variants={{ visible: { transition: { staggerChildren: 0.1 } }}}
              className="mt-8 space-y-6"
            >
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex"
                >
                  <motion.div 
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 text-white"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <item.icon className="h-5 w-5 font-bold" />
                  </motion.div>
                  <div className="ml-4">
                    <h4 className="text-sm font-extrabold text-gray-900">{item.title}</h4>
                    <p className="mt-1 text-sm font-bold text-gray-600">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-orange-100"
          >
            <motion.h3 
              className="text-xl font-extrabold text-gray-900"
              variants={itemVariants}
            >
              Send us a message
            </motion.h3>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {formFields.map((field, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                >
                  <label htmlFor={field.id} className="block text-sm font-bold text-gray-700">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <motion.textarea
                      id={field.id}
                      name={field.name}
                      rows={4}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm font-medium"
                      required
                      whileFocus={{
                        scale: 1.01,
                        boxShadow: "0 0 0 2px rgba(234, 88, 12, 0.5)"
                      }}
                    />
                  ) : field.type === 'select' ? (
                    <motion.select
                      id={field.id}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 py-2 pl-3 pr-10 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm font-medium"
                      required
                      whileFocus={{
                        scale: 1.01,
                        boxShadow: "0 0 0 2px rgba(234, 88, 12, 0.5)"
                      }}
                    >
                      {field.options.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </motion.select>
                  ) : (
                    <motion.input
                      type={field.type}
                      name={field.name}
                      id={field.id}
                      value={formData[field.name]}
                      onChange={handleChange}
                      autoComplete={field.autoComplete}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm font-medium"
                      required
                      whileFocus={{
                        scale: 1.01,
                        boxShadow: "0 0 0 2px rgba(234, 88, 12, 0.5)"
                      }}
                    />
                  )}
                </motion.div>
              ))}

              {submitStatus === 'success' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={successVariants}
                  className="rounded-md bg-green-50 p-4"
                >
                  <p className="text-sm font-bold text-green-800">
                    Thank you! Your message has been sent successfully.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={successVariants}
                  className="rounded-md bg-red-50 p-4"
                >
                  <p className="text-sm font-bold text-red-800">
                    Something went wrong. Please try again later.
                  </p>
                </motion.div>
              )}

              <motion.div
                variants={itemVariants}
              >
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full rounded-lg bg-orange-600 py-3 px-4 text-sm font-extrabold text-white shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ 
                        opacity: [0.6, 1, 0.6],
                        transition: { repeat: Infinity, duration: 1.5 }
                      }}
                    >
                      Sending...
                    </motion.span>
                  ) : 'Send Message'}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.3,
            type: "spring",
            stiffness: 60
          }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-orange-50 p-8 shadow-xl"
        >
          <motion.h3 
            className="text-xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Location
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.005 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2
            }}
            viewport={{ once: true }}
            className="mt-6 aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.585343824076!2d3.421535315231415!3d6.430326595334549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5287b1c8b9b%3A0x1d3f1a3e3b3b3b3b!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="NKO Limited Location"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper data
const contactItems = [
  {
    icon: MapPinIcon,
    title: 'Our Office',
    content: '123 Business Avenue\nVictoria Island\nLagos, Nigeria'
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    content: 'Main: +234 800 000 0000\nSupport: +234 800 000 0001'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    content: 'General: info@nkolimited.com\nSupport: support@nkolimited.com'
  },
  {
    icon: ClockIcon,
    title: 'Business Hours',
    content: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM'
  }
]

const formFields = [
  {
    id: 'name',
    name: 'name',
    label: 'Full Name',
    type: 'text',
    autoComplete: 'name'
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email Address',
    type: 'email',
    autoComplete: 'email'
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    autoComplete: 'tel'
  },
  {
    id: 'service',
    name: 'service',
    label: 'Service Interested In',
    type: 'select',
    options: [
      'Select a service',
      'Staffing Solutions',
      'Call Center Outsourcing',
      'Payment Management',
      'Workforce Management',
      'Other'
    ]
  },
  {
    id: 'message',
    name: 'message',
    label: 'Message',
    type: 'textarea'
  }
]