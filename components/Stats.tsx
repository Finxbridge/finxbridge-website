'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    experience: 0,
  })

  const finalCounts = {
    clients: 150,
    projects: 500,
    satisfaction: 98,
    experience: 15,
  }

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        clients: Math.floor(finalCounts.clients * progress),
        projects: Math.floor(finalCounts.projects * progress),
        satisfaction: Math.floor(finalCounts.satisfaction * progress),
        experience: Math.floor(finalCounts.experience * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(finalCounts)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [inView])

  const stats = [
    { value: counts.clients, suffix: '+', label: 'Happy Clients' },
    { value: counts.projects, suffix: '+', label: 'Projects Completed' },
    { value: counts.satisfaction, suffix: '%', label: 'Client Satisfaction' },
    { value: counts.experience, suffix: '+', label: 'Years Experience' },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-dark text-white">
      <div className="container-custom">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
