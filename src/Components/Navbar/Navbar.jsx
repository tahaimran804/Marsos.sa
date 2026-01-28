"use client";

import React, { useContext } from 'react'
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

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const { cartItems } = useContext(CartContext)
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    null
  )
  const categories = Object.values(
    AllProducts.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = {
          name: product.category,
          count: 0,
          imageUrl: product.categoryImage,
        }
      }
      acc[product.category].count++
      return acc
    }, {})
  )
  const Topcategories = categories.slice(0, 4)
  const categoryItems = Topcategories.map((item, index) => ({
    id: 100 + index,
    name: t(item.name),
    link: `/marketplace/products?category=${encodeURIComponent(item.name)}`
  }));
  const NavItems = [
    { id: 1, name: t("home"), link: "/marketplace" },
    { id: 2, name: t("all_products"), link: "/marketplace/products" },
    { id: 3, name: t("suppliers_directory"), link: "/marketplace/suppliers" },
    ...categoryItems
  ]



  return (
    <header className='w-full sticky z-50 top-0 border-b border-gray-200 left-0 bg-white h-auto'>
      <Container className='py-2'>
        <div className='flex flex-col gap-2 items-start'>
          <div className='flex py-4 border-b border-gray-200 items-center lg:items-start xl:items-center justify-between gap-1 w-full'>
            <div className='flex xl:flex-row flex-col items-start xl:items-center gap-2 xl:gap-8 '>
              <Link href={"/marketplace"}>
                <div className='flex items-center gap-2'>
                  <span>
                    <Image src={"/Logo.png"} width={40} height={40} alt='Logo' />
                  </span>
                  <div className='flex flex-col items-start'>
                    <h2 className='text-2xl text-[#2d5016] font-bold'>{t("company_name")}</h2>
                    <p className='text-xs text-gray-500'>{t("marketplace")}</p>
                  </div>
                </div>
              </Link>
              <div className='lg:flex hidden items-center gap-2 px-2 w-100 h-9 bg-[#f9fafb] border border-[#e5e7eb]'>
                <span className='text-xl text-gray-500'><CiSearch /></span>
                <input type="text" placeholder={t("search_placeholder")} className='w-full text-sm border-none outline-0 h-full' />
              </div>
            </div>

            <div className='flex items-center gap-3 xl:gap-8 '>
              <div className="lg:flex hidden items-center gap-2">
                <Link href={"/marketplace/additive-manufacturing"}>
                  <button
                    className="px-5 py-2 cursor-pointer bg-[#f9fafb] flex items-center gap-2 border border-[#D4B483] text-sm text-[#2d5016]
    hover:bg-[#D4B483]
    transition-all duration-800 ease-in-out"
                  >
                    <span><MdOutlinePrint /></span>
                    {t("additive_manufacturing")}
                  </button>
                </Link>

                <Link href={"/marketplace/rfq"}>
                  <button
                    className="border cursor-pointer border-[#2d5016] px-4 py-2 text-sm text-[#2d5016]
    hover:bg-[#2d5016] hover:text-white
    transition-all duration-800 ease-in-out"
                  >
                    {t("submit_rfq")}
                  </button>
                </Link>
              </div>

              <div className='flex items-center gap-1.5 sm:gap-4'>
                <LanguagesSwitch />
                <button>
                  <Link href={"/marketplace/buyer-dashboard"}>
                    <span className='text-[#000000] md:text-lg lg:text-xl'>
                      <MdOutlineDashboard />
                    </span>
                  </Link>
                </button>
                {/* <button>
                  <span className='text-[#000000] md:text-lg lg:text-xl'>
                    <GoBell />
                  </span>
                </button> */}
                <button>
                  <Link href={"/marketplace/cart"}>
                    <span className='text-[#000000] flex items-start gap-0.5 md:text-lg lg:text-xl'>
                      <IoCartOutline />
                      {totalQuantity > 0 && (
                        <span className='text-xs font-[#2D5016]'>{totalQuantity}</span>
                      )}
                    </span>
                  </Link>
                </button>
                {/* <button>
                  <span className='text-[#000000] md:text-lg lg:text-xl'>
                    <FiBox />
                  </span>
                </button> */}
                {/* <button>
                  <span className='text-[#000000] md:text-lg lg:text-xl'>
                    <IoPersonOutline />
                  </span>
                </button> */}
              </div>
            </div>

          </div>
          <nav className='py-2 w-full'>
            <ul className='flex w-full items-center gap-4
               overflow-x-auto md:overflow-x-visible
               no_scrollbar md:no_scrollbar'>
              {NavItems.map((item) => (
                <li key={item.id} className='whitespace-nowrap'>
                  <Link href={item.link} className='text-[16px] text-black'>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
export default Navbar
