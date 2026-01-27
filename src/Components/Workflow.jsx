"use client"
import React from 'react'
import Container from '@/src/Components/Container'
import { useLanguage } from '@/src/Context/LanguageContext'
import {
  IoCartOutline,
  IoSettingsOutline,
  IoPersonOutline,
  IoBarChartOutline
} from "react-icons/io5";

const Workflow = () => {
  const { t } = useLanguage()

  const WorkflowData = [
    {
      id: 1,
      name: t("wf_step_1_title"),
      desc: t("wf_step_1_desc"),
      icon: <IoCartOutline />,
    },
    {
      id: 2,
      name: t("wf_step_2_title"),
      desc: t("wf_step_2_desc"),
      icon: <IoSettingsOutline />,
    },
    {
      id: 3,
      name: t("wf_step_3_title"),
      desc: t("wf_step_3_desc"),
      icon: <IoPersonOutline />,
    },
    {
      id: 4,
      name: t("wf_step_4_title"),
      desc: t("wf_step_4_desc"),
      icon: <IoBarChartOutline />,
    },
  ]

  return (
    <div id="how-it-works">
      <Container className='py-16'>
        <div className='flex w-full flex-col mt-5 items-center'>
          <h1 className='text-xl text-center max-[400px]:text-lg md:text-3xl text-[#2d5016] font-bold'>
            {t("wf_heading")}
          </h1>
          <p className='text-sm md:text-lg text-center text-gray-500'>
            {t("wf_desc")}
          </p>
        </div>

        <div className='w-full grid mt-8 max-[400px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-4'>
          {WorkflowData.map((elemItem, index) => (
            <div key={elemItem.id} className='flex relative flex-col items-center w-full gap-2'>
              <span className='w-16 md:w-20 h-16 md:h-20 rounded-full flex items-center justify-center text-white bg-[#2d5016] text-2xl md:text-4xl relative'>
                {elemItem.icon}
                <span className="p-1 rounded-full border text-xs border-[#2d5016] absolute -top-1 -right-1 text-black bg-white">
                  0{elemItem.id}
                </span>
              </span>

              <div className='flex w-full flex-col items-center'>
                <h1 className='text-lg text-center text-[#2d5016] font-bold'>
                  {elemItem.name}
                </h1>
                <p className='text-sm text-center text-gray-500'>
                  {elemItem.desc}
                </p>
              </div>

              {index !== WorkflowData.length - 1 && (
                <span className='hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#2D5016] to-transparent translate-x-10'></span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>

  )
}

export default Workflow
