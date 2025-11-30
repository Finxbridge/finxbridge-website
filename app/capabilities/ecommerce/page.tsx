import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ecommerce Capabilities - Finxbridge | Financial Ecommerce Solutions',
  description: 'Explore Finxbridge ecommerce capabilities including payment processing, digital commerce, and financial technology solutions for online businesses.',
}

export default function EcommercePage() {
  const capabilities = [
    {
      title: 'Payment Processing',
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      description: 'Secure and scalable payment processing for ecommerce platforms',
      features: [
        'Multi-payment Gateway Support',
        'Card Payment Processing',
        'UPI & Digital Wallets',
        'International Payments',
        'Subscription Billing',
        'Split Payments'
      ]
    },
    {
      title: 'Checkout Solutions',
      icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      description: 'Optimized checkout experiences to maximize conversion rates',
      features: [
        'One-Click Checkout',
        'Guest Checkout',
        'Saved Payment Methods',
        'Address Autocomplete',
        'Dynamic Pricing',
        'Promotional Codes'
      ]
    },
    {
      title: 'Fraud Prevention',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      description: 'Advanced fraud detection and prevention mechanisms',
      features: [
        'Real-time Fraud Scoring',
        '3D Secure Authentication',
        'Velocity Checks',
        'Device Fingerprinting',
        'Machine Learning Models',
        'Chargeback Management'
      ]
    },
    {
      title: 'Financial Services',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      description: 'Embedded financial services to enhance customer experience',
      features: [
        'Buy Now Pay Later (BNPL)',
        'EMI Options',
        'Digital Credit Lines',
        'Instant Refunds',
        'Store Credit',
        'Loyalty Programs'
      ]
    }
  ]

  const ecommerceProducts = [
    {
      title: 'Payment Gateway',
      description: 'Comprehensive payment processing solution',
      features: ['Multiple payment methods', 'PCI DSS compliant', 'Global coverage', 'Instant settlements']
    },
    {
      title: 'Digital Wallet',
      description: 'Branded wallet solution for your platform',
      features: ['Stored value', 'P2P transfers', 'Cashback & rewards', 'Multi-currency support']
    },
    {
      title: 'BNPL Platform',
      description: 'Flexible payment options for customers',
      features: ['Instant approval', 'Configurable tenures', 'Risk management', 'Auto-debit setup']
    },
    {
      title: 'Merchant Dashboard',
      description: 'Complete business management portal',
      features: ['Transaction monitoring', 'Settlement tracking', 'Analytics & reports', 'Dispute resolution']
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Ecommerce Capabilities
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Powering Digital Commerce with Advanced Payment & Financial Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Our Ecommerce Capabilities</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Complete solutions for digital commerce and payment processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={capability.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark mb-3">{capability.title}</h3>
                    <p className="text-dark-light mb-6">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-dark-light">
                          <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Ecommerce Products</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Ready-to-deploy solutions for your digital commerce needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceProducts.map((product, index) => (
              <div key={index} className="bg-light p-6 rounded-xl hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-dark mb-3">{product.title}</h3>
                <p className="text-dark-light text-sm mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-dark-light">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Seamless Integrations</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Connect with leading ecommerce platforms and tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Ecommerce Platforms',
                platforms: ['Shopify', 'WooCommerce', 'Magento', 'Custom Platforms']
              },
              {
                category: 'Payment Methods',
                platforms: ['Credit/Debit Cards', 'UPI', 'Net Banking', 'Digital Wallets']
              },
              {
                category: 'Business Tools',
                platforms: ['Accounting Software', 'CRM Systems', 'Analytics Tools', 'Marketing Platforms']
              }
            ].map((integration, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-dark mb-6 text-center">{integration.category}</h3>
                <ul className="space-y-3">
                  {integration.platforms.map((platform, idx) => (
                    <li key={idx} className="flex items-center text-dark-light">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {platform}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Why Choose Our Ecommerce Solutions</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Built for performance, security, and scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                title: 'Fast Integration',
                description: 'Go live in days with our plug-and-play solutions'
              },
              {
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                title: 'Bank-Grade Security',
                description: 'PCI DSS Level 1 certified and fully compliant'
              },
              {
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                title: 'High Success Rate',
                description: '99%+ transaction success rate across India'
              },
              {
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Competitive Pricing',
                description: 'Industry-leading rates with transparent pricing'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-light rounded-xl hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-dark-light text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1M+', label: 'Transactions Daily' },
              { number: '99.9%', label: 'Uptime SLA' },
              { number: '50+', label: 'Payment Methods' },
              { number: '<2s', label: 'Average Response Time' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Power Your Ecommerce?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our ecommerce solutions can accelerate your digital business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
            >
              Get Started
            </Link>
            <Link
              href="/solutions"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
