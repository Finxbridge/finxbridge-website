'use client'

import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light via-primary to-primary-slate"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`text-white transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Financial Innovation with{' '}
              <span className="text-light bg-white bg-opacity-20 px-2 rounded">
                Expert Fintech Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-light-white opacity-90 leading-relaxed">
              At FinXbridge, we empower banks, NBFCs, and fintechs in India with expert
              fintech solutions that mitigate risks and ensure successful digital
              transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-md
                         hover:bg-light hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white
                         font-semibold rounded-md hover:bg-white hover:text-primary transition-all duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Placeholder for hero illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-sm opacity-75">
                    [Hero Image Placeholder]
                    <br />
                    Suggested: Modern fintech dashboard illustration
                    <br />
                    or financial technology graphics
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-lg animate-bounce" />
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white opacity-75">
          <span className="text-sm">Scroll Down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
