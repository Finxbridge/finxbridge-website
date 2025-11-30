'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CTO, Leading NBFC',
      content:
        'FinXbridge transformed our digital lending platform. Their expertise in fintech solutions and regulatory compliance was invaluable. The team delivered beyond our expectations.',
      avatar: 'RK',
    },
    {
      name: 'Priya Sharma',
      position: 'VP Technology, Major Bank',
      content:
        'Working with FinXbridge was a game-changer for our digital transformation journey. Their deep understanding of banking technology and customer-centric approach made all the difference.',
      avatar: 'PS',
    },
    {
      name: 'Amit Patel',
      position: 'Founder, Fintech Startup',
      content:
        'The FinXbridge team helped us build a scalable payment platform from the ground up. Their technical expertise and industry insights were crucial to our success.',
      avatar: 'AP',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

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
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-dark-light max-w-3xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute top-0 left-0 w-full translate-x-full'
                }`}
              >
                <div className="bg-light rounded-2xl p-8 md:p-12">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.avatar}
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-dark-light text-center mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="text-center">
                    <h4 className="font-bold text-dark text-lg">{testimonial.name}</h4>
                    <p className="text-dark-light">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary w-8' : 'bg-dark-light/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
