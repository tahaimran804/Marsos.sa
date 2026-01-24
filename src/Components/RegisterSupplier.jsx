"use client"
import React from 'react'
import Container from "@/src/Components/Container"
import { useLanguage } from '../Context/LanguageContext'
const RegisterSupplier = () => {
  const { t } = useLanguage()
  return (
    <Container>
      <div className='w-full h-60 bg-[#2D5016] px-2 sm:px-8 overflow-auto no_scrollbar py-4 rounded-md flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-between my-10'>
        <div className='flex flex-col gap-2 w-full md:w-200 items-center sm:items-start'>
          <h1 className='text-lg sm:text-2xl font-bold text-white'>{t("supplier_hedding")}</h1>
          <p className="text-sm sm:text-[16px] text-gray-200 sm:text-start text-center font-normal">{t("supplier_desc")}</p>
        </div>
        <button className="px-5 sm:px-8 py-2 sm:py-4 bg-white text-[#2D5016] whitespace-nowrap text-sm">{t("register_supplier")}</button>
      </div>
    </Container>
  )
}

export default RegisterSupplier