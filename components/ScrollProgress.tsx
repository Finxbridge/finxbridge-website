'use client'

import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

      if (scrollHeight > 0) {
        setScrollProgress((currentProgress / scrollHeight) * 100)
      }
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div
      className="progress-bar"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}

export default ScrollProgress
