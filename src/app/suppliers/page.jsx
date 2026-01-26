"use client"
import CompanyCard from '@/src/Components/CompanyCard';
import Container from '@/src/Components/Container'
import GridToCol from '@/src/Components/GridToCol';
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { IoPrintOutline, IoFilterOutline, IoAddOutline } from "react-icons/io5";


const page = () => {
  const [isGrid, setIsGrid] = useState(true)
  return (
    <>
      <div className='w-full py-4 bg-white border-b border-gray-200 '>
        <Container>
          <div className='flex flex-col lg:flex-row items-start  lg:items-center w-full gap-5 justify-between'>
            <h1 className='text-2xl font-semibold whitespace-nowrap text-black'>Supplier Directory
            </h1>

            <div className='flex items-center gap-2 px-2 w-full h-9 bg-[#f9fafb] border border-[#e5e7eb]'>
              <span className='text-xl text-gray-500'><CiSearch /></span>
              <input type="text" placeholder={"Search suppliers by name, ID..."} className='w-full text-sm border-none outline-0 h-full' />
            </div>

            <div className='flex  items-center gap-2'>
              <button className='py-2 whitespace-nowrap flex items-center gap-1 rounded-sm px-4 border border-[#2D5016] text-sm text-[#2D5016]'><span>
                <IoPrintOutline />
              </span> Save Search</button>
              <button className='py-2 whitespace-nowrap flex items-center gap-1 rounded-sm px-4 border border-[#2D5016] text-sm text-[#2D5016]'>
                <span>
                  <IoFilterOutline />
                </span>
                Save Search</button>
              <button className='py-2 whitespace-nowrap flex items-center gap-1 rounded-sm px-4 bg-[#2D5016] text-sm text-white'>
                <span>
                  <IoAddOutline />
                </span>
                Save Search</button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className='grid w-full grid-cols-12 py-5 sm:py-10 gap-4 items-start'>
          <div className='col-span-3 max-[800px]:col-span-12 w-full h-120 overflow-y-auto  rounded-md p-4 bg-white'>
            <h1 className='text-lg border-b border-gray-200 pb-2 font-semibold text-black flex items-center gap-2 mb-4'>
              <IoFilterOutline className='text-xl' />
              Filters
            </h1>

            <div className='mb-5'>
              <h3 className='text-sm font-medium text-black mb-2'>Country</h3>
              <div className='flex flex-col gap-2'>
                {["Saudi Arabia", "UAE", "China", "Germany", "USA"].map((item) => (
                  <label key={item} className='flex items-center gap-2 text-sm text-gray-700'>
                    <input type="checkbox" className='accent-[#2D5016]' />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className='mb-5'>
              <h3 className='text-sm font-medium text-black mb-2'>Manufacturing Process</h3>
              <div className='flex flex-col gap-2'>
                {[
                  "3D Printing",
                  "Injection Molding",
                  "CNC Machining",
                  "Laser Cutting",
                  "Sheet Metal"
                ].map((item) => (
                  <label key={item} className='flex items-center gap-2 text-sm text-gray-700'>
                    <input type="checkbox" className='accent-[#2D5016]' />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className='mb-5'>
              <h3 className='text-sm font-medium text-black mb-2'>Industry</h3>
              <div className='flex flex-col gap-2'>
                {[
                  "Automotive",
                  "Aerospace",
                  "Medical",
                  "Electronics",
                  "Packaging"
                ].map((item) => (
                  <label key={item} className='flex items-center gap-2 text-sm text-gray-700'>
                    <input type="checkbox" className='accent-[#2D5016]' />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className='mb-5'>
              <h3 className='text-sm font-medium text-black mb-2'>Certifications</h3>
              <div className='flex flex-col gap-2'>
                {["ISO 9001", "ISO 14001", "FDA Approved", "CE Certified"].map((item) => (
                  <label key={item} className='flex items-center gap-2 text-sm text-gray-700'>
                    <input type="checkbox" className='accent-[#2D5016]' />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className='mb-2'>
              <h3 className='text-sm font-medium text-black mb-2'>Minimum Order Qty</h3>
              <div className='flex items-center gap-2'>
                <input
                  type="number"
                  placeholder="Min"
                  className='w-full border border-gray-300 px-2 py-1 text-sm rounded outline-none'
                />
                <input
                  type="number"
                  placeholder="Max"
                  className='w-full border border-gray-300 px-2 py-1 text-sm rounded outline-none'
                />
              </div>
            </div>
          </div>
          <section className='col-span-9 max-[800px]:col-span-12 w-full h-full flex flex-col gap-3 items-start'>
            <div className='flex flex-row max-[330px]:flex-col items-start sm:items-center  justify-between w-full'>
              <div className='flex flex-col gap-1 items-start'>
                <h1 className='text-lg sm:text-2xl font-semibold flex items-center gap-1'>
                  Suppliers Found
                  <span className='text-sm sm:text-lg font-normal text-gray-500'>6</span>
                </h1>
                <p className='text-sm text-gray-500'>Showing results based on your preferences</p>
              </div>

              <div className='flex sm:flex-row flex-col max-[330px]:flex-row items-end sm:items-center gap-1.5 sm:gap-4'>
                <select
                  className="w-full border border-gray-300 px-3 py-1 text-sm rounded outline-none">
                  <option value="">Best Match</option>
                  <option value="">Best Match</option>
                  <option value="">Verified First</option>
                  <option value="">Highest Rating</option>
                  <option value="">Fastest Response</option>
                </select>
                <GridToCol isGrid={isGrid} setIsGrid={setIsGrid} />
              </div>
            </div>
            <div className={`w-full h-auto ${isGrid ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3" : "flex flex-col gap-4"}`}>
              <CompanyCard isGrid={isGrid} />
            </div>
          </section>
        </div>
      </Container>
    </>
  )
}

export default page