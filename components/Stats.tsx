'use client'

import { useEffect, useState, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'

interface StatItem {
  key: string
  value: number
  suffix: string
  label: string
}

interface StatsContent {
  stats: StatItem[]
}

interface StatsProps {
  content: StatsContent
}

const Stats = ({ content }: StatsProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const initialCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    content.stats.forEach(stat => {
      counts[stat.key] = 0
    })
    return counts
  }, [content.stats])

  const finalCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    content.stats.forEach(stat => {
      counts[stat.key] = stat.value
    })
    return counts
  }, [content.stats])

  const [counts, setCounts] = useState(initialCounts)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      const newCounts: Record<string, number> = {}
      content.stats.forEach(stat => {
        newCounts[stat.key] = Math.floor(finalCounts[stat.key] * progress)
      })
      setCounts(newCounts)

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(finalCounts)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [inView, content.stats, finalCounts])

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-dark text-white">
      <div className="container-custom">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {content.stats.map((stat, index) => (
            <div
              key={stat.key}
              className={`text-center transition-all duration-1000 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {counts[stat.key]}
                {stat.suffix}
              </div>
              <div className="text-xs sm:text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
