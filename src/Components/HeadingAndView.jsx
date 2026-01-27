"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { IoArrowForwardOutline } from "react-icons/io5";
import { useLanguage } from '@/src/Context/LanguageContext';

const HeadingAndView = (props) => {
  const router = useRouter();
  const { t } = useLanguage()
  const { Heading, url } = props;
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-2xl font-bold text-black">{Heading}</h1>
      <button
        onClick={() => router.push(`/marketplace/${url}`)}
        className="text-sm text-gray-500 flex items-center cursor-pointer hover:underline transition gap-1">
        {t("view")} <IoArrowForwardOutline />
      </button>
    </div>
  )
}

export default HeadingAndView