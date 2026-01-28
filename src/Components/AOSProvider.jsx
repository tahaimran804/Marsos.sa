'use client'

import { useEffect } from 'react'
import AOS from 'aos'

const AOSProvider = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    })
  }, [])

  return null
}

export default AOSProvider
