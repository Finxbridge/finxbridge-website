'use client'

import { useInView } from 'react-intersection-observer'

const Partners = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const partners = [
    { name: 'HDFC Bank', logo: 'HDFC' },
    { name: 'ICICI Bank', logo: 'ICICI' },
    { name: 'Axis Bank', logo: 'AXIS' },
    { name: 'Bajaj Finserv', logo: 'BAJAJ' },
    { name: 'Tata Capital', logo: 'TATA' },
    { name: 'Mahindra Finance', logo: 'M&M' },
    { name: 'Kotak', logo: 'KOTAK' },
    { name: 'YES Bank', logo: 'YES' },
  ]

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
            Our Trusted <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-lg text-dark-light max-w-3xl mx-auto">
            Trusted by leading financial institutions across India
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-6 bg-light rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-primary">
                    {partner.logo}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-dark-light font-medium">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-dark-light italic">
            And many more leading financial institutions...
          </p>
        </div>
      </div>
    </section>
  )
}

export default Partners
