"use client"

import React from 'react'
import Container from '@/src/Components/Container'
import { useLanguage } from '../Context/LanguageContext'
import Image from 'next/image'

const LandingLayoutHeroSection = () => {
  const { t } = useLanguage()
  return (
    <div id='home' className='bg-gray-50 w-full h-full'>
      <Container>
        <div className='w-full py-10 items-center h-full grid gird-cols-1 md:grid-cols-2 gap-2 md:gap-15'>
          <div className='w-full flex flex-col gap-5 items-start h-auto'>
            <h1 className='text-3xl lg:text-5xl font-bold'>{t("landing_hend")} <span className='text-[#2d5016]'>{t("landing_hend_span")}</span></h1>
            <p className='text-sm text-gray-500'>{t("landing_desc")}</p>
            <div className='grid max-[500px]:grid-cols-1 grid-cols-2 w-full gap-2 items-center'>
              <a href="#demo">
                <button className='py-3 px-6 w-full text-sm bg-[#2d5016] text-white flex items-center justify-center gap-2'>{t("schedule")}</button>
              </a>
              <a href="#platform">
                <button className='py-3 px-6 w-full text-sm flex items-center justify-center bg-transparent border border-gray-200 text-[#2d5016] gap-2'>{t("overview")}</button>
              </a>
            </div>
            <div className='grid sm:grid-cols-3 grid-cols-2 w-full gap-2 items-start'>
              {[
                { id: 1, name: "item_hedding", desc: "item_desc" },
                {
                  id: 2, name: "item_hedding1", desc: "item_desc1"
                },
                { id: 3, name: "item_hedding2", desc: "item_des2" }].map((item) => {
                  return (
                    <div className='flex flex-col mt-5 items-start sm:items-center' key={item.id}>
                      <h1 className='text-xl max-[400px]:text-sm text-[#2d5016] font-bold'>{t(item.name)}</h1>
                      <p className='text-sm max-[400px]:text-xs text-gray-500'>{t(item.desc)}</p>
                    </div>
                  )
                })}
            </div>
          </div>
          <div className='w-full relative my-10 h-72 rounded-2xl shadow-xl'>
            <Image src="/Hero_Image.jpg" alt='hero-image' fill className='w-full  rounded-2xl h-32' />
            <div className='px-4 py-3 h-auto flex items-center justify-start gap-2 bg-white absolute shadow-lg -bottom-8 left-0 border border-gray-200 rounded-md'>
              <span className='w-12 h-12 text-2xl rounded-full flex items-center justify-center bg-gray-200'>
                📊
              </span>
              <div className='flex flex-col items-start'>
                <h1 className='text-sm sm:text-lg text-[#2d5016] font-bold'>{t("analytics")}</h1>
                <p className='text-xs sm:text-sm text-gray-500'>{t("production")}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default LandingLayoutHeroSection