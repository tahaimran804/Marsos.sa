import React from 'react'
import Container from '@/src/Components/Container'
import { CiPen, CiSearch } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className='w-full h-100 lg:h-120 bg-[#2D5016]'>
      <Container className='flex items-center justify-center h-full'>
        <div className='h-full py-8 lg:py-16 w-full lg:w-200 flex-col gap-8 flex items-center justify-center'>
          <div className='flex flex-col w-full lg:w-180 items-center justify-center gap-2'>
            <h1 className='text-white max-[380px]:text-2xl lg:text-5xl text-3xl text-center font-bold'>Saudi Arabia's Premier B2B Marketplace</h1>
            <p className='text-sm lg:text-lg text-center text-gray-200'>Connect with verified suppliers, source quality materials, and streamline your procurement.</p>
          </div>
          <div className='flex flex-col items-center justify-center w-full gap-3'>
            <div className='flex items-center gap-2 px-2 w-full h-full py-1 bg-[#f9fafb] border border-[#e5e7eb]'>
              <span className='text-2xl text-gray-500'><CiSearch /></span>
              <input type="text" placeholder='What are you looking for?' className="outline-0 border-0 w-full h-full" />
              <button className='px-8 py-3 bg-[#2D5016] text-white text-sm'>Search</button>
            </div>
            <button className='flex gap-1 items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 md:h-11  bg-[#D4B483] hover:bg-[#c3a06e] text-[#2D5016] font-bold border-2 border-white/20 shadow-lg px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg transition-transform hover:scale-105'>
              <span className='text-xl md:text-2xl'><CiPen /></span>
              Customized Products
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection