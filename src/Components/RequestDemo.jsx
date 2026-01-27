"use client"
import React from 'react'
import Container from '@/src/Components/Container'
import { useLanguage } from '@/src/Context/LanguageContext'
import { CiPaperplane } from 'react-icons/ci'
import { MdOutlineMailOutline } from "react-icons/md"

const RequestDemo = () => {
  const { t } = useLanguage()

  return (
    <Container id="demo" className='py-16'>
      <div className='w-full flex flex-col gap-2 items-center text-center'>
        <h1 className='text-xl md:text-3xl font-bold'>{t("requestDemoTitle")}</h1>
        <p className='text-sm text-gray-500'>{t("requestDemoSubtitle")}</p>
      </div>

      <section className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {/* Form */}
        <div className='w-full h-auto'>
          <form className='flex flex-col gap-4 w-full'>
            <div className='grid grid-cols-2 max-[500px]:grid-cols-1 gap-2'>
              <div className='flex flex-col gap-1'>
                <label className='text-sm text-gray-600'>{t("formFullName")}</label>
                <input type="text" className='w-full outline-0 py-2 px-2 border border-gray-200' required />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-sm text-gray-600'>{t("formEmail")}</label>
                <input type="email" className='w-full outline-0 py-2 px-2 border border-gray-200' required />
              </div>
            </div>

            <div className='grid grid-cols-2 max-[500px]:grid-cols-1 gap-2'>
              <div className='flex flex-col gap-1'>
                <label className='text-sm text-gray-600'>{t("formCompany")}</label>
                <input type="text" className='w-full outline-0 py-2 px-2 border border-gray-200' required />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-sm text-gray-600'>{t("formPhone")}</label>
                <input type="number" className='w-full outline-0 py-2 px-2 border border-gray-200' required />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-sm text-gray-600'>{t("formIndustry")}</label>
              <select required className='border outline-0 py-2 px-2 border-gray-200 w-full'>
                <option value="">{t("formSelectIndustry")}</option>
                <option value="cups">{t("formPaperCups")}</option>
                <option value="furniture">{t("formFurniture")}</option>
                <option value="other">{t("formOther")}</option>
              </select>
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-sm text-gray-600'>{t("formMessage")}</label>
              <textarea className='w-full h-32 outline-0 py-2 px-2 border border-gray-200' required />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-1 bg-[#2D5016] text-white px-6 py-3 rounded-md hover:bg-[#223d0f] font-bold transition"
            >
              <CiPaperplane className="text-xl transition-transform duration-300 group-hover:rotate-300" />
              {t("formSubmit")}
            </button>
          </form>
        </div>

        {/* Contact & Why Choose */}
        <div className='flex flex-col gap-5'>
          <div className='py-6 rounded-2xl flex bg-white shadow-2xl flex-col w-full gap-8 px-6'>
            <h1 className='text-2xl font-bold text-black'>{t("contactTitle")}</h1>
            <div className='flex flex-col gap-5'>
              <div className='flex items-start gap-2'>
                <span className='p-4 text-2xl rounded-sm text-[#2d5016] bg-gray-200'><MdOutlineMailOutline /></span>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-xl font-bold'>{t("contactEmail")}</h1>
                  <a href='mailto:marsos@marsos.sa' className='text-lg text-gray-500'>marsos@marsos.sa</a>
                </div>
              </div>

              <div className='flex items-start gap-2'>
                <span className='p-4 text-2xl rounded-sm text-[#2d5016] bg-gray-200'><MdOutlineMailOutline /></span>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-xl font-bold'>{t("contactPhone")}</h1>
                  <a href='tel:+966553977153' className='text-lg text-gray-500'>+966553977153</a>
                </div>
              </div>

              <div className='flex items-start gap-2'>
                <span className='p-4 text-2xl rounded-sm text-[#2d5016] bg-gray-200'><MdOutlineMailOutline /></span>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-xl font-bold'>{t("contactOffice")}</h1>
                  <a href='#' className='text-lg text-gray-500'>{t("contactOfficeAddress")}</a>
                </div>
              </div>
            </div>
          </div>

          <div className='py-6 rounded-2xl w-full flex bg-[#2d5016] flex-col gap-3 px-6'>
            <h1 className='text-2xl font-bold text-white'>{t("whyTitle")}</h1>
            <ul className='flex flex-col px-6 gap-1'>
              <li className='text-lg list-disc text-gray-100'>{t("whyPoint1")}</li>
              <li className='text-lg list-disc text-gray-100'>{t("whyPoint2")}</li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default RequestDemo
