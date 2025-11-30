import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solutions - Finxbridge | Industry-Specific Fintech Solutions',
  description: 'Discover Finxbridge industry-specific fintech solutions designed for banks, NBFCs, and financial institutions across India.',
}

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Core Banking Solutions',
      category: 'Banking',
      description: 'Modern core banking platforms that enable digital transformation and enhance operational efficiency.',
      features: [
        'Account Management',
        'Transaction Processing',
        'Customer Onboarding',
        'Multi-channel Banking',
        'Real-time Settlement',
        'Regulatory Reporting'
      ],
      benefits: ['Reduced operational costs by 40%', 'Faster time to market', '24/7 availability']
    },
    {
      title: 'Lending Management Platform',
      category: 'NBFCs',
      description: 'End-to-end lending solution from application to disbursal and collections.',
      features: [
        'Loan Origination System',
        'Credit Assessment & Scoring',
        'Document Management',
        'Automated Underwriting',
        'Disbursal Management',
        'Collections & Recovery'
      ],
      benefits: ['30% faster loan processing', 'Reduced NPAs', 'Improved customer experience']
    },
    {
      title: 'Digital Payment Gateway',
      category: 'Payments',
      description: 'Secure and scalable payment processing solution supporting multiple payment methods.',
      features: [
        'Multi-payment Support (UPI, Cards, Wallets)',
        'Payment Security & Encryption',
        'Real-time Transaction Monitoring',
        'Settlement & Reconciliation',
        'Fraud Detection',
        'API Integration'
      ],
      benefits: ['99.9% uptime', 'PCI DSS compliant', 'Instant settlements']
    },
    {
      title: 'Wealth Management Suite',
      category: 'Investment',
      description: 'Comprehensive platform for managing investments, portfolios, and client relationships.',
      features: [
        'Portfolio Management',
        'Investment Advisory',
        'Risk Profiling',
        'Goal-based Planning',
        'Performance Analytics',
        'Client Portal'
      ],
      benefits: ['Automated rebalancing', 'Real-time insights', 'Enhanced client engagement']
    },
    {
      title: 'RegTech Solutions',
      category: 'Compliance',
      description: 'Automated compliance and regulatory reporting solutions to meet regulatory requirements.',
      features: [
        'KYC & AML Automation',
        'Transaction Monitoring',
        'Regulatory Reporting',
        'Audit Trail Management',
        'Risk Scoring',
        'Sanction Screening'
      ],
      benefits: ['90% reduction in manual work', 'Real-time compliance', 'Reduced regulatory risk']
    },
    {
      title: 'Mobile Banking App',
      category: 'Digital Banking',
      description: 'Feature-rich mobile banking application for iOS and Android platforms.',
      features: [
        'Account Management',
        'Fund Transfers',
        'Bill Payments',
        'Card Management',
        'Investment Services',
        'Personalized Insights'
      ],
      benefits: ['4.8+ app store rating', 'Biometric security', 'Offline capabilities']
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Industry Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Tailored Fintech Solutions for Your Specific Needs
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Our Solutions Portfolio</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Comprehensive solutions designed to address specific industry challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
                  <span className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-3">
                    {solution.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>

                <div className="p-8">
                  <p className="text-dark-light mb-6">{solution.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-dark mb-3">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-dark-light">
                          <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-bold text-dark mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Our Technology Stack</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Built on modern, scalable, and secure technologies
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes'] },
              { category: 'Backend', items: ['Node.js', 'Java', 'Python', 'Microservices'] },
              { category: 'Frontend', items: ['React', 'Angular', 'Vue.js', 'React Native'] },
              { category: 'Security', items: ['Encryption', 'OAuth 2.0', 'Blockchain', 'Biometrics'] }
            ].map((stack, index) => (
              <div key={index} className="bg-light p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, idx) => (
                    <li key={idx} className="text-dark-light flex items-center">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
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
              Our solutions integrate with leading platforms and services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Banking APIs',
                description: 'Integration with RBI, NPCI, and banking networks',
                icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
              },
              {
                title: 'Payment Gateways',
                description: 'Support for all major payment processors in India',
                icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
              },
              {
                title: 'Third-party Services',
                description: 'KYC, credit bureaus, and compliance partners',
                icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-dark-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Looking for a Custom Solution?</h2>
          <p className="text-xl text-white/90 mb-8">
            We specialize in building tailored solutions that meet your unique business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
            >
              Request a Demo
            </Link>
            <Link
              href="/case-studies"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
