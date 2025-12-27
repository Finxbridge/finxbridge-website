'use client'

import { useInView } from 'react-intersection-observer'

interface HomeServicesContent {
  title: string
  titleHighlight: string
  description: string
  services: Array<{
    icon: string
    title: string
    description: string
  }>
}

interface ServicesProps {
  content: HomeServicesContent
}

const Services = ({ content }: ServicesProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container-custom">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            {content.title} <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
          <p className="text-lg text-dark-light max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
              <p className="text-dark-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
