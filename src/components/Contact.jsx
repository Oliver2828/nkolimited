import React, { useState, useRef } from 'react'
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { motion, useInView, AnimatePresence } from 'framer-motion'

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
  const [focusedField, setFocusedField] = useState(null)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  }

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const formItemVariants = {
    hidden: { opacity: 0, y: 15 },
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
      boxShadow: "0 5px 15px rgba(234, 88, 12, 0.15)",
      transition: { duration: 0.2 }
    }
  }

  const buttonHoverVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(234, 88, 12, 0.3)",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    },
    tap: {
      scale: 0.97
    }
  }

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  const iconVariants = {
    rest: { rotate: 0 },
    hover: { rotate: -15, transition: { duration: 0.3 } }
  }

  const contactItems = [
    {
      icon: MapPinIcon,
      title: 'Our Office',
      content: '123 Business Avenue\nLekki Island\nLagos, Nigeria',
      color: 'bg-blue-500'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: 'Main: +234 905 692 5668\nSupport: +234 810 546 0026',
      color: 'bg-green-500'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'General: info@nkolimited.com\nSupport: support@nkolimited.com',
      color: 'bg-red-500'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      content: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM',
      color: 'bg-purple-500'
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

  return (
    <section id="contact" ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 to-orange-50 py-24 sm:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            Get in <span className="text-orange-600">Touch</span>
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.2 }}
          >
            Have questions about our services? Reach out to our team—we're here to help.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            <motion.p 
              className="text-gray-600"
              variants={itemVariants}
            >
              Fill out the form or contact us directly through these channels.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              className="space-y-6"
            >
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideInVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <motion.div 
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.color} text-white shadow-md`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="mt-1 text-gray-600 whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              Send us a message
            </motion.h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field, index) => (
                <motion.div
                  key={index}
                  variants={formItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                  className={field.type === 'select' ? "mb-6" : "relative"}
                >
                  {field.type === 'select' ? (
                    <div>
                      <label
                        htmlFor={field.id}
                        className="block mb-1 text-sm font-medium text-orange-600"
                      >
                        {field.label}
                      </label>
                      <motion.select
                        id={field.id}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className="block w-full rounded-xl border-gray-300 py-3 pl-4 pr-10 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 border font-medium bg-white"
                        required
                        whileFocus="focus"
                        variants={inputFocusVariants}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {field.options.map((option, i) => (
                          <option key={i} value={option}>{option}</option>
                        ))}
                      </motion.select>
                    </div>
                  ) : field.type === 'textarea' ? (
                    <>
                      <label 
                        htmlFor={field.id} 
                        className={`absolute left-4 transition-all duration-300 ${
                          focusedField === field.name || formData[field.name] 
                            ? '-top-3 text-xs bg-white px-2 text-orange-600 font-medium' 
                            : 'top-3 text-gray-500'
                        }`}
                      >
                        {field.label}
                      </label>
                      <motion.textarea
                        id={field.id}
                        name={field.name}
                        rows={4}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-4 pt-5 border font-medium"
                        required
                        whileFocus="focus"
                        variants={inputFocusVariants}
                      />
                    </>
                  ) : (
                    <>
                      <label 
                        htmlFor={field.id} 
                        className={`absolute left-4 transition-all duration-300 ${
                          focusedField === field.name || formData[field.name] 
                            ? '-top-3 text-xs bg-white px-2 text-orange-600 font-medium' 
                            : 'top-3 text-gray-500'
                        }`}
                      >
                        {field.label}
                      </label>
                      <motion.input
                        type={field.type}
                        name={field.name}
                        id={field.id}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        autoComplete={field.autoComplete}
                        className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-4 pt-5 border font-medium"
                        required
                        whileFocus="focus"
                        variants={inputFocusVariants}
                      />
                    </>
                  )}
                </motion.div>
              ))}

              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={successVariants}
                    className={`rounded-xl p-4 ${
                      submitStatus === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}
                  >
                    <p className="font-medium">
                      {submitStatus === 'success' 
                        ? 'Thank you! Your message has been sent successfully.' 
                        : 'Something went wrong. Please try again later.'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-4 px-6 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-6 w-6 rounded-full border-2 border-white border-t-transparent"
                    />
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        variants={iconVariants}
                        initial="rest"
                        whileHover="hover"
                        className="ml-2"
                      >
                        <PaperAirplaneIcon className="h-5 w-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5 }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            Our Location
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="overflow-hidden rounded-xl shadow-lg border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.585343824076!2d3.421535315231415!3d6.430326595334549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5287b1c8b9b%3A0x1d3f1a3e3b3b3b3b!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="NKO Limited Location"
              className="block"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}