'use client'

import { useState } from 'react'

interface ContactFormProps {
  content: {
    form: {
      title: string;
      subtitle: string;
      fields: {
        name: { label: string; placeholder: string };
        email: { label: string; placeholder: string };
        phone: { label: string; placeholder: string; hint: string };
        company: { label: string; placeholder: string };
        subject: {
          label: string;
          placeholder: string;
          options: Array<{ value: string; label: string }>;
        };
        message: { label: string; placeholder: string };
      };
      submitButton: string;
      submittingButton: string;
      successMessage: string;
    };
    contactInfo: {
      title: string;
      subtitle: string;
      items: Array<{
        icon: string;
        title: string;
        details: string[];
        subtext: string;
      }>;
    };
    socialMedia: {
      title: string;
      links: Array<{
        name: string;
        href: string;
        icon: string;
      }>;
    };
  };
}

const socialIcons: Record<string, JSX.Element> = {
  linkedin: (
    <svg className="w-6 h-6 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  twitter: (
    <svg className="w-6 h-6 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  facebook: (
    <svg className="w-6 h-6 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  instagram: (
    <svg className="w-6 h-6 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
    </svg>
  ),
};

export default function ContactForm({ content }: ContactFormProps) {
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
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-dark mb-2">{content.form.title}</h2>
        <p className="text-dark-light mb-8">{content.form.subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                {content.form.fields.name.label}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder={content.form.fields.name.placeholder}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                {content.form.fields.email.label}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder={content.form.fields.email.placeholder}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                {content.form.fields.phone.label}
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
                placeholder={content.form.fields.phone.placeholder}
                title={content.form.fields.phone.hint}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-dark mb-2">
                {content.form.fields.company.label}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder={content.form.fields.company.placeholder}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-2">
              {content.form.fields.subject.label}
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            >
              {content.form.fields.subject.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
              {content.form.fields.message.label}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
              placeholder={content.form.fields.message.placeholder}
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
              {content.form.successMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? content.form.submittingButton : content.form.submitButton}
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-dark mb-6">{content.contactInfo.title}</h2>
          <p className="text-dark-light mb-8">
            {content.contactInfo.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {content.contactInfo.items.map((item, index) => (
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
          <h3 className="text-xl font-bold text-dark mb-4">{content.socialMedia.title}</h3>
          <div className="flex gap-4">
            {content.socialMedia.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
                aria-label={link.name}
              >
                {socialIcons[link.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
