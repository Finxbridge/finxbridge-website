import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - FinXbridge | Expert Fintech Solutions',
  description: 'Learn about FinXbridge, our mission to empower financial innovation, and our team of fintech experts helping banks, NBFCs, and fintechs succeed.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              About FinXbridge
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Empowering Financial Innovation with Expert Fintech Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-dark mb-4">Our Mission</h2>
              <p className="text-dark-light leading-relaxed">
                To empower banks, NBFCs, and fintechs in India with cutting-edge fintech solutions that mitigate risks,
                ensure successful digital transformation, and drive sustainable growth in the rapidly evolving financial landscape.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-dark mb-4">Our Vision</h2>
              <p className="text-dark-light leading-relaxed">
                To be India's most trusted partner in financial technology transformation, recognized for innovation,
                reliability, and our commitment to delivering solutions that shape the future of finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-dark-light leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the financial services industry in India, FinXbridge has grown
                  into a trusted partner for banks, NBFCs, and fintech companies seeking to navigate the complex
                  landscape of digital transformation.
                </p>
                <p>
                  Our journey began with a simple yet powerful idea: financial institutions need more than just
                  technology solutions – they need strategic partners who understand the unique challenges and
                  opportunities in the Indian financial ecosystem.
                </p>
                <p>
                  Today, we serve numerous clients across India, helping them implement robust fintech solutions,
                  manage risks effectively, and achieve their digital transformation goals with confidence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <svg className="w-64 h-64 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Our Core Values</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Continuously pushing boundaries to deliver cutting-edge solutions',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
              },
              {
                title: 'Integrity',
                description: 'Building trust through transparency and ethical practices',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              },
              {
                title: 'Excellence',
                description: 'Striving for the highest standards in everything we deliver',
                icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
              },
              {
                title: 'Partnership',
                description: 'Collaborating closely with clients to ensure their success',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{value.title}</h3>
                <p className="text-dark-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Why Choose FinXbridge</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              What sets us apart in the fintech industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Deep Industry Expertise',
                description: 'Our team brings years of experience in financial services and technology, understanding both worlds perfectly.'
              },
              {
                title: 'Proven Track Record',
                description: 'Successfully delivered 500+ projects for leading banks, NBFCs, and fintech companies across India.'
              },
              {
                title: 'Risk Mitigation Focus',
                description: 'We prioritize security, compliance, and risk management in every solution we deliver.'
              },
              {
                title: 'End-to-End Support',
                description: 'From consultation to implementation and ongoing support, we are with you every step of the way.'
              },
              {
                title: 'Cutting-Edge Technology',
                description: 'Leveraging the latest technologies to deliver innovative solutions that drive real business value.'
              },
              {
                title: 'Client-Centric Approach',
                description: 'Your success is our success. We tailor our solutions to meet your specific needs and objectives.'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 border-l-4 border-primary bg-light hover:bg-white transition-colors">
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-dark-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Financial Services?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how FinXbridge can help your organization achieve its digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
            >
              Contact Us Today
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
