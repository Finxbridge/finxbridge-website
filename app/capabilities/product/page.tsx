import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Product Capabilities - Finxbridge | Fintech Product Solutions',
  description: 'Explore Finxbridge product capabilities including product development, management, and innovation solutions for financial institutions.',
}

export default function ProductPage() {
  const capabilities = [
    {
      title: 'Product Development',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      description: 'End-to-end product development services from concept to launch',
      features: [
        'Product Strategy & Roadmap',
        'Requirements Analysis',
        'UI/UX Design',
        'Agile Development',
        'Quality Assurance',
        'Product Launch Support'
      ]
    },
    {
      title: 'Product Management',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      description: 'Comprehensive product lifecycle management and optimization',
      features: [
        'Product Portfolio Management',
        'Feature Prioritization',
        'Stakeholder Management',
        'Product Analytics',
        'Performance Monitoring',
        'Continuous Improvement'
      ]
    },
    {
      title: 'Product Innovation',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      description: 'Cutting-edge innovation to keep your products ahead of the market',
      features: [
        'Market Research',
        'Competitive Analysis',
        'Innovation Workshops',
        'Proof of Concept',
        'MVP Development',
        'Technology Evaluation'
      ]
    },
    {
      title: 'Product Integration',
      icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      description: 'Seamless integration with third-party systems and platforms',
      features: [
        'API Development',
        'System Integration',
        'Data Migration',
        'Legacy System Modernization',
        'Platform Connectivity',
        'Integration Testing'
      ]
    }
  ]

  const productSolutions = [
    {
      title: 'Digital Banking Products',
      description: 'Modern banking solutions for retail and corporate customers',
      items: ['Mobile Banking', 'Internet Banking', 'Corporate Banking Portal', 'Banking Super App']
    },
    {
      title: 'Lending Products',
      description: 'Comprehensive lending solutions for various credit products',
      items: ['Personal Loans', 'Business Loans', 'Mortgage Platform', 'Buy Now Pay Later']
    },
    {
      title: 'Investment Products',
      description: 'Wealth and investment management platforms',
      items: ['Trading Platform', 'Mutual Funds', 'Robo Advisory', 'Portfolio Management']
    },
    {
      title: 'Payment Products',
      description: 'Next-generation payment processing solutions',
      items: ['Payment Gateway', 'Digital Wallet', 'POS Solutions', 'P2P Transfers']
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Product Capabilities
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Building Innovative Financial Products That Drive Business Growth
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Our Product Capabilities</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Comprehensive product services to bring your fintech vision to life
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

      {/* Product Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Product Solutions</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Ready-to-deploy and customizable product solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productSolutions.map((solution, index) => (
              <div key={index} className="bg-light p-6 rounded-xl hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-dark mb-3">{solution.title}</h3>
                <p className="text-dark-light text-sm mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-dark-light">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Process Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Our Product Development Process</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              A proven methodology for successful product delivery
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Market research and requirements gathering' },
              { step: '02', title: 'Design', description: 'UX/UI design and prototyping' },
              { step: '03', title: 'Development', description: 'Agile development with regular sprints' },
              { step: '04', title: 'Testing', description: 'Comprehensive quality assurance' },
              { step: '05', title: 'Launch', description: 'Deployment and post-launch support' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary/20 mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-dark-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Technologies We Use</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Building products with cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Frontend',
                technologies: ['React', 'Angular', 'Vue.js', 'React Native', 'Flutter', 'Next.js']
              },
              {
                category: 'Backend',
                technologies: ['Node.js', 'Java Spring', 'Python Django', '.NET Core', 'Microservices', 'GraphQL']
              },
              {
                category: 'Infrastructure',
                technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'CI/CD']
              }
            ].map((tech, index) => (
              <div key={index} className="bg-light p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-dark mb-6 text-center">{tech.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {tech.technologies.map((item, idx) => (
                    <div key={idx} className="bg-white px-4 py-2 rounded-lg text-center text-dark-light hover:text-primary hover:shadow transition-all">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Build Your Next Product?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our product capabilities can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
            >
              Get Started
            </Link>
            <Link
              href="/case-studies"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
