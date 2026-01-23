"use client"

import React from 'react'
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import Container from '@/src/Components/Container'
import { useLanguage } from '@/src/Context/LanguageContext';
const WhyChooseUs = () => {
  const { t } = useLanguage();

  const WhyChooseUsData = [
    {
      id: 1,
      icon: <MdOutlineVerifiedUser />,
      title: t("why_verified_suppliers"),
      description: t("why_verified_suppliers_desc")
    },
    {
      id: 2,
      icon: <IoWalletOutline />,
      title: t("why_secure_payments"),
      description: t("why_secure_payments_desc")
    },
    {
      id: 3,
      icon: <LiaShippingFastSolid />,
      title: t("why_logistics_integration"),
      description: t("why_logistics_integration_desc")
    }
  ];
  return (
    <section className='w-full h-auto py-10 md:py-16 px-0 md:px-4 bg-white'>
      <Container>
        <div className='grid max-[600px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 w-full gap-3 sm:gap-6'>
          {WhyChooseUsData.map((item) => {
            return <div key={item.id} className="border h-50 shadow-sm border-gray-200 px-4 py-4 rounded-md flex flex-col items-center justify-center gap-4 overflow-auto no_scrollbar">
              <span className="text-xl flex items-center justify-center w-12 h-12 bg-[#DCFCE7] rounded-full text-[#2D5016]">
                {item.icon}
              </span>
              <div className="flex flex-col items-center w-full ">
                <h1 className='text-xl font-bold text-black'>{item.title}</h1>
                <p className='text-sm text-center text-gray-500'>{item.description}</p>
              </div>
            </div>
          })}
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs