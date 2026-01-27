"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import Navbar from '@/src/Components/Navbar/Navbar'

const ShowNavbarinMarkplace = () => {
  const PathName = usePathname()
  return (
    <>
      {PathName === "/" ? (
        null
      ) : (
        <Navbar />
      )}
    </>
  )
}

export default ShowNavbarinMarkplace