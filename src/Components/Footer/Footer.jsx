import React from 'react'
import Container from "@/src/Components/Container"
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";

const Footer = () => {
  const year = new Date().getFullYear();

  const ProductLink = [
    {
      id: 1,
      name: "A Complete Ecosystem for",
      url: "#"
    },
    {
      id: 2,
      name: "How It Works",
      url: "#"
    },
    {
      id: 3,
      name: "Industries",
      url: "#"
    },
  ]
  const CompanyLink = [
    {
      id: 1,
      name: "Home",
      url: "#"
    },
    {
      id: 2,
      name: "Request Demo",
      url: "#"
    },
  ]
  const ResourcesLink = [
    {
      id: 1,
      name: "Platform",
      url: "#"
    },
    {
      id: 2,
      name: "Industries",
      url: "#"
    },
  ]


  return (
    <section className='w-full bg-[#111827] h-auto'>
      <Container className='py-2'>
        <div className='flex items-start  flex-col gap-4'>
          <div className="py-4 w-full border-b border-gray-200 grid grid-cols-12 items-start gap-6">

            <div className="flex w-full  md:col-span-5 col-span-12 flex-col gap-4 items-start">
              <div className="flex items-center gap-2">
                <span>
                  <Image src="/logo.webp" width={50} height={40} alt="Logo" />
                </span>
                <div className="flex flex-col items-start">
                  <h2 className="text-xl text-white font-bold">Marsos.sa</h2>
                </div>
              </div>

              <p className="text-sm font-normal text-gray-500">
                Specializing in enabling smart manufacturing and on-demand production by
                developing and integrating digital platforms with Manufacturing Resource
                Planning (MRP) and Enterprise Resource Planning (ERP) systems. We transform
                customer orders into precise, fully integrated production plans, ensuring
                operational efficiency, minimizing waste, and accelerating execution.
              </p>
            </div>

            <div className="grid md:col-span-7 col-span-12 max-[480px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 gap-6">

              {/* Product */}
              <div className="flex mt-2 w-full flex-col gap-2 items-start">
                <h1 className="text-xl font-semibold text-white">Product</h1>
                <ul className="flex flex-col gap-1 items-start">
                  {ProductLink.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        className="text-sm text-gray-500 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="flex mt-2 w-full flex-col gap-2 items-start">
                <h1 className="text-xl font-semibold text-white">Company</h1>
                <ul className="flex flex-col gap-1 items-start">
                  {CompanyLink.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        className="text-sm text-gray-500 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="flex mt-2 w-full flex-col gap-2 items-start">
                <h1 className="text-xl font-semibold text-white">Resources</h1>
                <ul className="flex flex-col gap-1 items-start">
                  {ResourcesLink.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        className="text-sm text-gray-500 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          <footer className='flex flex-col sm:flex-row items-center sm:justify-between justify-center gap-2 w-full py-2 sm:py-4 '>
            <p className='text-sm text-gray-500'>© {year} Marsos.sa. All rights reserved.</p>
            <div className='flex items-center gap-2'>
              <button className='text-sm text-gray-500 hover:text-white transition-colors'>Privacy Policy</button>
              <button className='text-sm text-gray-500 hover:text-white transition-colors'>Terms of Service</button>
            </div>
          </footer>
        </div>
      </Container>
    </section>
  )
}

export default Footer