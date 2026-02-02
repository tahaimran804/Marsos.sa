"use client";

import React, { useContext, useState } from 'react'
import Container from '@/src/Components/Container'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineDashboard, MdOutlinePrint } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import Link from 'next/link';
import LanguagesSwitch from "@/src/Components/LanguagesSwitch";
import { useLanguage } from '@/src/Context/LanguageContext';
import { CartContext } from '@/src/Context/CartContext';
import { AllProducts } from "@/src/Data/ProductData"
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const MainNavbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [openNavbar, setOpenNavbar] = useState(false)
  const NavItems = [
    { id: 1, name: t("home"), link: "#home" },
    { id: 2, name: t("platform"), link: "#platform" },
    { id: 3, name: t("how_it_works"), link: "#how-it-works" },
    { id: 4, name: t("industries"), link: "#industries" },
  ]
  return (
    <>
      <header className='w-full sticky z-50 top-0 border-b border-gray-200 left-0 bg-white h-auto'>
        <Container className='py-2'>
          <div className='flex flex-col gap-2 items-start'>
            <div className='flex py-4 items-center lg:items-start xl:items-center justify-between gap-1 w-full'>
              <div className='flex xl:flex-row flex-col items-start xl:items-center gap-2 xl:gap-8 '>
                <Link href={"/"}>
                  <div className='flex items-center gap-2'>
                    <span>
                      <Image src={"/Logo.png"} width={40} height={40} alt='Logo' />
                    </span>
                    <div className='flex flex-col items-start'>
                      <h2 className='text-2xl text-[#2d5016] font-bold'>{t("company_name")}</h2>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='flex items-center gap-6'>
                <nav className='py-2 lg:flex hidden'>
                  <ul className='flex w-full items-center gap-4'>
                    {NavItems.map((item) => (
                      <li key={item.id} className='whitespace-nowrap'>
                        <a href={item.link} className='text-[16px] text-black'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className='flex items-center gap-3 xl:gap-8 '>
                  <div className='flex  items-center gap-1.5 sm:gap-4'>
                    <Link href={"/marketplace"}>
                      <button className='text-sm  lg:flex hidden rounded-md text-[#2d5016] border border-gray-200 bg-gray-200 px-6 py-2 items-center gap-1'><span><IoCartOutline /></span> {t("market")}</button>
                    </Link>
                    <LanguagesSwitch />
                    <button onClick={() => setOpenNavbar(true)} className='text-xl text-black flex lg:hidden'><FiMenu /></button>
                    <a href="#demo">
                      <button className='text-sm lg:flex cursor-pointer hidden text-white bg-[#2d5016] px-4 py-2'>{t("demo")}</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </header>

      <div
        className={`
    flex flex-col gap-2 py-6 px-2 max-[400px]:w-full w-80 h-screen fixed top-0 right-0 z-50 
    bg-white shadow-lg border-l border-gray-200
    transform transition-transform duration-500 ease-in-out
    ${openNavbar ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className='flex items-start flex-col gap-4'>
          <nav className='py-2'>
            <ul className='flex w-full items-start flex-col gap-4'>
              {NavItems.map((item) => (
                <li key={item.id} className='whitespace-nowrap'>
                  <Link
                    href={item.link}
                    onClick={() => setOpenNavbar(false)}
                    className='text-[16px] text-black'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='flex items-center w-full flex-col gap-3'>
            <div className='flex items-center w-full flex-col gap-2'>
              <Link href={"/marketplace"} className='w-full '>
                <button className='text-sm justify-center w-full cursor-pointer rounded-md text-[#2d5016] border border-gray-200 bg-gray-200 px-6 py-2 flex items-center gap-1'>
                  <span><IoCartOutline /></span> {t("market")}
                </button>
              </Link>

              <button
                onClick={() => setOpenNavbar(false)}
                className='text-xl text-black cursor-pointer absolute top-2 right-2 flex lg:hidden'
              >
                <IoMdClose />
              </button>

              <a href="#demo" className='w-full '>
                <button onClick={() => setOpenNavbar(false)} className='text-sm cursor-pointer rounded-md w-full text-white bg-[#2d5016] px-4 py-2'>
                  {t("demo")}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MainNavbar
