"use client"
import React from 'react'
import Container from '@/src/Components/Container'
import { useLanguage } from '@/src/Context/LanguageContext'
import Image from 'next/image'
import { BsCupHot } from "react-icons/bs"
import { LuSofa } from "react-icons/lu"

const Industry_Specific = () => {
  const { t } = useLanguage()

  return (
    <div id='industries' className="bg-gray-50 w-full">
      <Container className="py-10">

        {/* Heading */}
        <div className="w-full flex flex-col gap-2 items-center text-center">
          <h1 className="text-xl flex items-center gap-2 md:text-3xl font-bold">
            {t("IndustrySpecific")}  <span className="text-[#2d5016]">
              {t("soluHov")}
            </span>
          </h1>

          <p className="text-sm text-gray-500">
            {t("IndustryDesc")}
          </p>
        </div>

        {/* Content */}
        <section className="mt-10 flex flex-col gap-10">

          {/* Paper Cups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg sm:text-2xl font-bold flex items-center gap-2">
                <span className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#2d5016] text-white">
                  <BsCupHot />
                </span>
                {t("PaperCupsTitle")}
              </h2>

              <p className="text-sm text-gray-500">
                {t("PaperCupsDesc")}
              </p>

              <ul className="pl-4 flex flex-col gap-2">
                <li className="list-disc text-sm">{t("PaperCupPoint1")}</li>
                <li className="list-disc text-sm">{t("PaperCupPoint2")}</li>
                <li className="list-disc text-sm">{t("PaperCupPoint3")}</li>
                <li className="list-disc text-sm">{t("PaperCupPoint4")}</li>
              </ul>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/Cups-Manufacturing.jpg"
                alt={t("PaperCupsTitle")}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Furniture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-64 md:h-80 rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/Furniture-Manufacturing.jpg"
                alt={t("FurnitureTitle")}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg sm:text-2xl font-bold flex items-center gap-2">
                <span className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#2d5016] text-white">
                  <LuSofa />
                </span>
                {t("FurnitureTitle")}
              </h2>

              <p className="text-sm text-gray-500">
                {t("FurnitureDesc")}
              </p>

              <ul className="pl-4 flex flex-col gap-2">
                <li className="list-disc text-sm">{t("FurniturePoint1")}</li>
                <li className="list-disc text-sm">{t("FurniturePoint2")}</li>
                <li className="list-disc text-sm">{t("FurniturePoint3")}</li>
                <li className="list-disc text-sm">{t("FurniturePoint4")}</li>
              </ul>
            </div>
          </div>

        </section>
      </Container>
    </div>
  )
}

export default Industry_Specific
