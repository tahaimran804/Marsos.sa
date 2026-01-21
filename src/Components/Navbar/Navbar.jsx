import React from 'react'
import Container from '@/src/Components/Container'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineDashboard, MdOutlinePrint } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import Link from 'next/link';
const Navbar = () => {
  const NavItems = [
    { id: 1, name: "Home", link: "/marketplace" },
    { id: 2, name: "All Products", link: "/marketplace" },
    { id: 3, name: "Suppliers Directory", link: "/marketplace" },
    { id: 4, name: "Raw Materials", link: "/marketplace" },
    { id: 5, name: "Machinery", link: "/marketplace" },
    { id: 6, name: "Packaging", link: "/marketplace" },
  ]

  return (
    <header className='w-full sticky z-50 top-0 border-b border-gray-200 left-0 bg-white h-auto'>
      <Container className='py-2'>
        <div className='flex flex-col gap-2 items-start'>
          <div className='flex py-4 border-b border-gray-200 items-center lg:items-start xl:items-center justify-between gap-1 w-full'>
            <div className='flex xl:flex-row flex-col items-start xl:items-center gap-2 xl:gap-8 '>
              <div className='flex items-center gap-2'>
                <span>
                  <Image src={"/Logo.png"} width={40} height={40} alt='Logo' />
                </span>
                <div className='flex flex-col items-start'>
                  <h2 className='text-2xl text-[#2d5016] font-bold'>Marsos.sa</h2>
                  <p className='text-xs text-gray-500'>MARKETPLACE</p>
                </div>
              </div>
              <div className='lg:flex hidden items-center gap-2 px-2 w-100 h-9 bg-[#f9fafb] border border-[#e5e7eb]'>
                <span className='text-xl text-gray-500'><CiSearch /></span>
                <input type="text" placeholder='Search For Products...' className='w-full text-sm border-none outline-0 h-full' />
              </div>
            </div>

            <div className='flex items-center gap-3 xl:gap-8 '>
              <div className="lg:flex hidden items-center gap-2">
                <button
                  className="px-5 py-2 bg-[#f9fafb] flex items-center gap-2 border border-[#D4B483] text-sm text-[#2d5016]
    hover:bg-[#D4B483]
    transition-all duration-800 ease-in-out"
                >
                  <span><MdOutlinePrint /></span>
                  Additive Manufacturing
                </button>

                <button
                  className="border border-[#2d5016] px-4 py-2 text-sm text-[#2d5016]
    hover:bg-[#2d5016] hover:text-white
    transition-all duration-800 ease-in-out"
                >
                  Submit RFQ
                </button>
              </div>

              <div className='flex items-center gap-1.5 sm:gap-4'>
                <button>
                  <span className='text-[#000000] max-[380px]:text-sm md:text-lg lg:text-xl'>
                    <GrLanguage />
                  </span>
                </button>
                <button>
                  <span className='text-[#000000] max-[380px]:text-sm md:text-lg lg:text-xl'>
                    <MdOutlineDashboard />
                  </span>
                </button>
                <button>
                  <span className='text-[#000000] max-[380px]:text-sm md:text-lg lg:text-xl'>
                    <GoBell />
                  </span>
                </button>
                <button>
                  <span className='text-[#000000] max-[380px]:text-sm md:text-lg lg:text-xl'>
                    <IoCartOutline />
                  </span>
                </button>
                <button>
                  <span className='text-[#000000] max-[380px]:text-sm md:text-lg lg:text-xl'>
                    <FiBox />
                  </span>
                </button>
                <button>
                  <span className='text-[#000000] max-[380px]:text-sm md:text-lg lg:text-xl'>
                    <IoPersonOutline />
                  </span>
                </button>
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