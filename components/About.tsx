'use client'

import { useInView } from 'react-intersection-observer'

interface HomeAboutContent {
  title: string
  titleHighlight: string
  paragraphs: string[]
  features: Array<{
    title: string
    description: string
  }>
  ctaText: string
  ctaHref: string
}

interface AboutProps {
  content: HomeAboutContent
}

const About = ({ content }: AboutProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="section-padding bg-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Image Placeholder */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-dark-light text-sm">
                      [About Image Placeholder]
                      <br />
                      Suggested: Professional team photo
                      <br />
                      or office/workspace image
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-dark/10 rounded-full -z-10" />
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
              {content.title} <span className="gradient-text">{content.titleHighlight}</span>
            </h2>
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-dark-light mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="space-y-4 mb-8">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">{feature.title}</h4>
                    <p className="text-dark-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={content.ctaHref} className="btn-primary">
              {content.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
