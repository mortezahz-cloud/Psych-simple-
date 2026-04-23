'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // محاسبه میزان اسکرول نسبت به کل صفحه
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const percent = (scrollTop / scrollHeight) * 100
      
      setScrollPercentage(percent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-1 bg-primary-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  )
}
