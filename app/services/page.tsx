import { Metadata } from 'next'
import Link from 'next/link'
import Partners from '@/components/Partners'

export const metadata: Metadata = {
  title: 'Our Services - Finxbridge | Fintech Solutions & Digital Transformation',
  description: 'Explore Finxbridge comprehensive fintech services including digital transformation, risk management, compliance solutions, and technology consulting for banks, NBFCs, and fintechs.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Digital Transformation',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      description: 'Transform your financial institution with cutting-edge digital solutions that enhance customer experience and operational efficiency.',
      features: [
        'Legacy System Modernization',
        'Cloud Migration & Management',
        'Digital Banking Platforms',
        'Mobile & Web Applications',
        'API Integration & Development',
        'Process Automation'
      ]
    },
    {
      title: 'Risk Management Solutions',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      description: 'Comprehensive risk assessment and mitigation strategies to protect your financial operations and ensure business continuity.',
      features: [
        'Credit Risk Assessment',
        'Operational Risk Management',
        'Fraud Detection & Prevention',
        'Cybersecurity Solutions',
        'Business Continuity Planning',
        'Risk Analytics & Reporting'
      ]
    },
    {
      title: 'Compliance & Regulatory',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      description: 'Stay compliant with evolving regulations and ensure your operations meet all regulatory requirements.',
      features: [
        'RBI Compliance Solutions',
        'KYC & AML Implementation',
        'Data Privacy & GDPR',
        'Regulatory Reporting',
        'Audit & Assessment',
        'Policy Development'
      ]
    },
    {
      title: 'Technology Consulting',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      description: 'Strategic technology guidance to help you make informed decisions and maximize your technology investments.',
      features: [
        'Technology Strategy & Roadmap',
        'Architecture Design',
        'Vendor Selection & Management',
        'Technology Due Diligence',
        'Innovation Workshops',
        'Digital Strategy Consulting'
      ]
    },
    {
      title: 'Payment Solutions',
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      description: 'Comprehensive payment processing and management solutions for seamless financial transactions.',
      features: [
        'Payment Gateway Integration',
        'UPI & Digital Wallets',
        'NEFT/RTGS/IMPS Solutions',
        'Payment Security',
        'Settlement & Reconciliation',
        'Cross-border Payments'
      ]
    },
    {
      title: 'Data Analytics & AI',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      description: 'Leverage data-driven insights and artificial intelligence to make smarter business decisions.',
      features: [
        'Predictive Analytics',
        'Customer Behavior Analysis',
        'Credit Scoring Models',
        'Machine Learning Solutions',
        'Business Intelligence',
        'Real-time Dashboards'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Comprehensive Fintech Solutions Tailored to Your Needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">What We Offer</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              End-to-end fintech solutions designed to drive your digital transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                    <p className="text-dark-light mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Our Approach</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your business needs, challenges, and objectives'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Developing tailored solutions and implementation roadmap'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Executing the solution with precision and expertise'
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing support and optimization for continuous improvement'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-dark-light">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Industries We Serve</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Specialized expertise across the financial services sector
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Banks',
                description: 'Digital banking solutions, core banking modernization, and customer experience enhancement',
                icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
              },
              {
                title: 'NBFCs',
                description: 'Lending platforms, risk management, and regulatory compliance solutions',
                icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
              },
              {
                title: 'Fintechs',
                description: 'Technology infrastructure, scalability solutions, and innovation support',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z'
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={industry.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">{industry.title}</h3>
                <p className="text-dark-light">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our services can help transform your financial operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
            >
              Contact Our Team
            </Link>
            <Link
              href="/solutions"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
