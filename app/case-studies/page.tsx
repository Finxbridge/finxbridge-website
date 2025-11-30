import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies - FinXbridge | Success Stories & Client Testimonials',
  description: 'Explore how FinXbridge has helped banks, NBFCs, and fintechs achieve digital transformation success with our proven solutions.',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Digital Transformation for Leading Private Bank',
      client: 'Top 10 Private Bank in India',
      category: 'Banking',
      challenge: 'The bank was struggling with legacy systems that hindered customer experience and operational efficiency. They needed a complete digital overhaul while ensuring zero downtime.',
      solution: 'Implemented a modern core banking platform with cloud-native architecture, mobile banking apps, and integrated payment solutions.',
      results: [
        '60% reduction in transaction processing time',
        '45% increase in digital adoption',
        '35% reduction in operational costs',
        '4.7/5 customer satisfaction rating'
      ],
      duration: '18 months',
      impact: '₹500+ Cr in cost savings annually'
    },
    {
      title: 'End-to-End Lending Platform for NBFC',
      client: 'Leading NBFC with ₹10,000+ Cr AUM',
      category: 'NBFC',
      challenge: 'Manual loan processing was taking 7-10 days, resulting in high operational costs and poor customer experience. High NPA rates due to inadequate credit assessment.',
      solution: 'Deployed automated lending management system with AI-powered credit scoring, digital KYC, and automated underwriting capabilities.',
      results: [
        'Loan processing time reduced from 7 days to 24 hours',
        '50% reduction in operational costs',
        '30% decrease in NPA rates',
        '3x increase in loan processing capacity'
      ],
      duration: '12 months',
      impact: '₹200+ Cr additional revenue in first year'
    },
    {
      title: 'Payment Gateway Integration for Fintech Startup',
      client: 'Fast-growing Payment Aggregator',
      category: 'Fintech',
      challenge: 'Needed a scalable payment infrastructure to handle rapid growth and integrate with multiple payment methods and banks.',
      solution: 'Built a robust payment gateway with multi-channel support, real-time monitoring, and automated reconciliation.',
      results: [
        '99.99% uptime achieved',
        'Processing 1M+ transactions daily',
        '40% reduction in payment failures',
        'PCI DSS Level 1 compliant'
      ],
      duration: '9 months',
      impact: 'Enabled 10x transaction volume growth'
    },
    {
      title: 'RegTech Solution for Compliance Automation',
      client: 'Multi-national Financial Institution',
      category: 'Compliance',
      challenge: 'Manual compliance processes were time-consuming and error-prone. Regulatory reporting required significant resources and was prone to delays.',
      solution: 'Implemented comprehensive RegTech platform with automated KYC, AML monitoring, and regulatory reporting.',
      results: [
        '90% reduction in manual compliance work',
        '100% on-time regulatory reporting',
        '70% faster KYC processing',
        'Zero compliance violations in 2 years'
      ],
      duration: '15 months',
      impact: '₹150+ Cr in compliance cost savings'
    },
    {
      title: 'Mobile-First Banking for Rural Cooperative Bank',
      client: 'State Cooperative Bank',
      category: 'Digital Banking',
      challenge: 'Needed to serve rural customers with limited internet connectivity while expanding digital services.',
      solution: 'Developed lightweight mobile banking app with offline capabilities, vernacular language support, and agent-assisted banking.',
      results: [
        '200,000+ app downloads in 6 months',
        '85% of transactions now digital',
        'Expanded reach to 500+ villages',
        '4.6/5 app store rating'
      ],
      duration: '10 months',
      impact: '5x increase in customer base'
    },
    {
      title: 'Wealth Management Platform Modernization',
      client: 'Leading Wealth Management Firm',
      category: 'Investment',
      challenge: 'Legacy wealth management system lacked modern portfolio management tools and client engagement features.',
      solution: 'Built comprehensive wealth management suite with robo-advisory, goal-based planning, and client portal.',
      results: [
        '₹5,000+ Cr AUM migrated successfully',
        '60% increase in client engagement',
        'Portfolio rebalancing automated',
        '25% reduction in advisory costs'
      ],
      duration: '14 months',
      impact: '40% growth in AUM in first year'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Success Stories
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Real Results from Real Clients Across India
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '100+', label: 'Happy Clients' },
              { number: '₹1000+ Cr', label: 'Cost Savings Generated' },
              { number: '99.5%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-dark-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100">
                <div className="grid lg:grid-cols-3">
                  {/* Left Column - Overview */}
                  <div className="lg:col-span-1 bg-gradient-to-br from-primary/5 to-primary-dark/5 p-8">
                    <span className="inline-block bg-primary text-white text-sm px-4 py-1 rounded-full mb-4">
                      {study.category}
                    </span>
                    <h2 className="text-2xl font-bold text-dark mb-3">{study.title}</h2>
                    <p className="text-dark-light mb-6">{study.client}</p>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-dark-light mb-1">Project Duration</div>
                        <div className="font-semibold text-dark">{study.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-dark-light mb-1">Business Impact</div>
                        <div className="font-semibold text-primary">{study.impact}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:col-span-2 p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-dark mb-2 flex items-center">
                          <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          The Challenge
                        </h3>
                        <p className="text-dark-light">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-dark mb-2 flex items-center">
                          <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Our Solution
                        </h3>
                        <p className="text-dark-light">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-dark mb-3 flex items-center">
                          <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          Results Achieved
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-start bg-primary/5 p-3 rounded-lg">
                              <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-dark font-medium text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">What Our Clients Say</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Hear directly from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "FinXbridge transformed our digital infrastructure completely. Their expertise and commitment to our success were exceptional.",
                author: "CTO, Leading Private Bank",
                rating: 5
              },
              {
                quote: "The lending platform has revolutionized our operations. We're processing loans faster than ever with significantly reduced costs.",
                author: "CEO, NBFC",
                rating: 5
              },
              {
                quote: "Outstanding service and support. The team understood our unique requirements and delivered a perfect solution.",
                author: "Head of Technology, Fintech Startup",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-dark-light italic mb-4">"{testimonial.quote}"</p>
                <p className="text-dark font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join the growing list of successful financial institutions transforming with FinXbridge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
            >
              Start Your Journey
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
