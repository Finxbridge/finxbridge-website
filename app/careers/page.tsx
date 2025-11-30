import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers - Finxbridge | Join Our Fintech Team',
  description: 'Explore exciting career opportunities at Finxbridge. Join our team of fintech experts and help shape the future of financial technology in India.',
}

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'We are looking for an experienced Full Stack Developer to build and maintain our fintech platforms.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/Azure)',
        'Knowledge of microservices architecture',
        'Experience in fintech or banking domain preferred'
      ]
    },
    {
      title: 'Product Manager - Digital Banking',
      department: 'Product',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead the development and strategy of our digital banking solutions.',
      requirements: [
        '5+ years of product management experience',
        'Strong understanding of banking and fintech products',
        'Experience with agile methodologies',
        'Excellent communication and stakeholder management skills'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Strong experience with Kubernetes and Docker',
        'Experience with AWS or Azure',
        'CI/CD pipeline experience',
        'Infrastructure as Code (Terraform/CloudFormation)'
      ]
    },
    {
      title: 'Senior Business Analyst',
      department: 'Consulting',
      location: 'Bangalore / Mumbai',
      type: 'Full-time',
      experience: '4-7 years',
      description: 'Work with clients to understand requirements and design fintech solutions.',
      requirements: [
        'Strong analytical and problem-solving skills',
        'Experience in banking or fintech domain',
        'Excellent documentation and presentation skills',
        'Experience with requirement gathering and analysis'
      ]
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Design beautiful and intuitive user experiences for our fintech products.',
      requirements: [
        'Strong portfolio demonstrating UX/UI skills',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Understanding of design systems and patterns',
        'Experience with mobile app design'
      ]
    },
    {
      title: 'QA Automation Engineer',
      department: 'Quality Assurance',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Build and maintain automated testing frameworks for our platforms.',
      requirements: [
        'Experience with test automation tools (Selenium, Cypress)',
        'Strong programming skills (Java, Python, or JavaScript)',
        'API testing experience',
        'CI/CD integration experience'
      ]
    }
  ]

  const benefits = [
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation and performance bonuses'
    },
    {
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family'
    },
    {
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      title: 'Learning & Development',
      description: 'Access to courses, certifications, and conferences'
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible working hours'
    },
    {
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      title: 'Remote Options',
      description: 'Hybrid work model with work-from-home flexibility'
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Team Events',
      description: 'Regular team outings and company events'
    },
    {
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      title: 'Performance Bonuses',
      description: 'Quarterly and annual performance-based rewards'
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Latest Technology',
      description: 'Work with cutting-edge tools and technologies'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Join Our Team
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Build the Future of Financial Technology with Finxbridge
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Why Work at Finxbridge</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Join a team that's passionate about innovation and making a real impact in fintech
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                title: 'Innovation First',
                description: 'Work on cutting-edge fintech solutions'
              },
              {
                icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
                title: 'Great Team',
                description: 'Collaborate with talented professionals'
              },
              {
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                title: 'Growth Opportunities',
                description: 'Continuous learning and career advancement'
              },
              {
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Global Impact',
                description: 'Your work impacts millions of users'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-dark-light text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Open Positions</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              Find your next career opportunity with us
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-dark">{position.title}</h3>
                        <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-dark-light text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {position.department}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {position.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {position.experience}
                        </div>
                      </div>

                      <p className="text-dark-light mb-4">{position.description}</p>

                      <div>
                        <h4 className="font-semibold text-dark mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-sm text-dark-light">
                              <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:w-48 flex-shrink-0">
                      <Link
                        href="/contact"
                        className="block w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Benefits & Perks</h2>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              We take care of our team members
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-sm text-dark-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-slate to-primary-aqua text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors inline-block"
          >
            Send Your Resume
          </Link>
        </div>
      </section>
    </main>
  )
}
