"use client"
import React from 'react'
import Container from '@/src/Components/Container'
import { useLanguage } from '@/src/Context/LanguageContext'
import Image from 'next/image'
import { IoWalletOutline, IoPersonOutline } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdOutlineDone } from "react-icons/md";

const Business_Management = () => {
  const { t } = useLanguage()

  return (
    <div id='platform' className='bg-gray-50 w-full h-full'>
      <Container>
        <div className='w-full py-10 items-center h-full grid gird-cols-1 md:grid-cols-2 gap-2 md:gap-15'>

          <div className='w-full flex flex-col gap-5 items-start h-auto'>
            <h1 className='text-xl md:text-3xl font-bold'>
              {t("bm_heading")}
              <span className='text-[#2d5016]'> {t("bm_heading_span")}</span>
            </h1>

            <p className='text-sm text-gray-500'>
              {t("bm_desc")}
            </p>

            <div className='w-full grid max-[500px]:grid-cols-1 grid-cols-2 gap-2 sm:gap-4'>

              {/* Manufacturing */}
              <div className='flex flex-col gap-2 w-full items-start'>
                <h1 className='text-lg text-[#2d5016] w-full border-b border-gray-200 pb-2'>
                  {t("manufacturing_mrp")}
                </h1>
                <ul className='flex flex-col gap-2 w-full items-start'>
                  {[t("mm_1"), t("mm_2"), t("mm_3")].map((name, i) => (
                    <li key={i} className='flex items-center gap-2 w-full text-xs text-gray-500'>
                      <span className='text-[#2d5016] border rounded-full p-0.5 border-[#2d5016]'>
                        <MdOutlineDone />
                      </span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Finance */}
              <div className='flex flex-col gap-2 w-full items-start'>
                <h1 className='text-lg text-[#2d5016] w-full border-b border-gray-200 pb-2'>
                  {t("finance_accounting")}
                </h1>
                <ul className='flex flex-col gap-2 w-full items-start'>
                  {[t("fa_1"), t("fa_2"), t("fa_3")].map((name, i) => (
                    <li key={i} className='flex items-center gap-2 w-full text-xs text-gray-500'>
                      <span className='text-[#2d5016] border rounded-full p-0.5 border-[#2d5016]'>
                        <MdOutlineDone />
                      </span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* HR */}
              <div className='flex flex-col gap-2 w-full items-start'>
                <h1 className='text-lg text-[#2d5016] w-full border-b border-gray-200 pb-2'>
                  {t("hr_payroll")}
                </h1>
                <ul className='flex flex-col gap-2 w-full items-start'>
                  {[t("hr_1"), t("hr_2"), t("hr_3")].map((name, i) => (
                    <li key={i} className='flex items-center gap-2 w-full text-xs text-gray-500'>
                      <span className='text-[#2d5016] border rounded-full p-0.5 border-[#2d5016]'>
                        <MdOutlineDone />
                      </span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sales */}
              <div className='flex flex-col gap-2 w-full items-start'>
                <h1 className='text-lg text-[#2d5016] w-full border-b border-gray-200 pb-2'>
                  {t("sales_distribution")}
                </h1>
                <ul className='flex flex-col gap-2 w-full items-start'>
                  {[t("sd_1"), t("sd_2"), t("sd_3")].map((name, i) => (
                    <li key={i} className='flex items-center gap-2 w-full text-xs text-gray-500'>
                      <span className='text-[#2d5016] border rounded-full p-0.5 border-[#2d5016]'>
                        <MdOutlineDone />
                      </span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          <div className='w-full relative my-10 h-60 sm:h-88 rounded-2xl shadow-xl'>
            <Image src="/business.jpg" alt='hero-image' fill className='w-full rounded-2xl h-32' />

            <div className='px-2 py-3 h-auto flex items-center justify-start gap-4 bg-white absolute shadow-lg bottom-2 left-2 border border-gray-200 rounded-md'>
              <div className='flex flex-col items-center'>
                <span className='text-[#2d5016]'><IoWalletOutline /></span>
                <p className='text-xs sm:text-sm text-gray-500'>{t("finance")}</p>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-[#2d5016]'><IoPersonOutline /></span>
                <p className='text-xs sm:text-sm text-gray-500'>{t("hr")}</p>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-[#2d5016]'><LiaFileInvoiceSolid /></span>
                <p className='text-xs sm:text-sm text-gray-500'>{t("invoice")}</p>
              </div>
            </div>

            <div className='px-2 py-3 h-auto flex items-center justify-start gap-2 bg-white absolute shadow-lg top-2 right-2 border border-gray-200 rounded-md'>
              <div className='flex flex-col items-start'>
                <p className='text-xs sm:text-sm text-gray-500'>
                  {t("unified_operations")}
                </p>
                <h1 className='text-sm sm:text-xl text-[#2d5016] font-bold'>100%</h1>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Business_Management
