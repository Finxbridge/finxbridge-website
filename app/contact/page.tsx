'use client'

import { useState } from 'react'
import { Metadata } from 'next'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    // Phone number validation - only allow digits and limit to 10
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10)
      setFormData({
        ...formData,
        [name]: digitsOnly
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }

    // Clear error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact page form submitted with data:', formData)
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      console.log('Sending request to /api/contact...')
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, source: 'contact-page' }),
      })

      console.log('Response received:', response.status, response.statusText)
      const data = await response.json()
      console.log('Response data:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Success
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Let's Discuss How We Can Help Transform Your Business
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-dark mb-2">Send Us a Message</h2>
              <p className="text-dark-light mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="9876543210"
                      title="Please enter a valid 10-digit phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-dark mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="demo">Request a Demo</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {submitStatus === 'error' && errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <p className="font-semibold mb-1">Error</p>
                    <p>{errorMessage}</p>
                  </div>
                )}

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-dark mb-6">Contact Information</h2>
                <p className="text-dark-light mb-8">
                  Reach out to us through any of the following channels. Our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                    title: 'Phone',
                    details: ['+91 80-1234-5678', '+91 80-8765-4321'],
                    subtext: 'Mon-Fri from 9am to 6pm IST'
                  },
                  {
                    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                    title: 'Email',
                    details: ['contact@finxbridge.com', 'support@finxbridge.com'],
                    subtext: 'We reply within 24 hours'
                  },
                  {
                    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                    title: 'Office',
                    details: ['123 Business Tower, MG Road', 'Bangalore, Karnataka 560001', 'India'],
                    subtext: 'Visit us Mon-Fri from 9am to 6pm'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-dark-light">{detail}</p>
                        ))}
                        <p className="text-sm text-dark-light/70 mt-2">{item.subtext}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-dark mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { name: 'LinkedIn', icon: 'linkedin' },
                    { name: 'Twitter', icon: 'twitter' },
                    { name: 'Facebook', icon: 'facebook' },
                    { name: 'Instagram', icon: 'instagram' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
                      aria-label={social.name}
                    >
                      <svg className="w-6 h-6 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark mb-4">Visit Our Office</h2>
            <p className="text-xl text-dark-light">We'd love to meet you in person</p>
          </div>

          <div className="bg-light rounded-2xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary-dark/10 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-dark-light">Interactive map will be displayed here</p>
                <p className="text-sm text-dark-light/70 mt-2">123 Business Tower, MG Road, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free consultation with our fintech experts today.
          </p>
          <a
            href="#"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
