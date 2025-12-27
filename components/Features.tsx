'use client'

import { useInView } from 'react-intersection-observer'
import { FeatureItem } from '@/lib/content'

interface FeaturesContent {
  title: string
  titleHighlight: string
  description: string
  features: FeatureItem[]
}

interface FeaturesProps {
  content: FeaturesContent
}

const Features = ({ content }: FeaturesProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="section-padding bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.map((feature, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 mb-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2">{feature.stat}</div>
                <div className="text-sm opacity-90">{feature.label}</div>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-dark-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
