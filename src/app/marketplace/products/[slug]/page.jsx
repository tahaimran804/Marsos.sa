"use client"

import Container from '@/src/Components/Container'
import ProductImageGallery from '@/src/Components/ProductImageGellary';
import { AllProducts } from '@/src/Data/ProductData';
import { CiPen } from "react-icons/ci";
import React, { use, useContext } from 'react'
import ProductActions from '@/src/Components/ProductActions';
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import Link from 'next/link';
import { CartContext } from '@/src/Context/CartContext';
import { IoPrintOutline } from 'react-icons/io5';
import { useLanguage } from '@/src/Context/LanguageContext';

const page = ({ params }) => {
  const { t } = useLanguage()
  const { addItems } = useContext(CartContext)
  const { slug } = use(params);
  const product = AllProducts.find(p => p.slug === slug);
  if (!product) {
    return (
      <Container>
        <div className="flex items-center justify-center h-96">
          Product not found
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <div className='flex items-center py-5 gap-1 w-full'>
        <Link className="text-sm text-gray-500 font-normal hover:text-gray-800" href={`${'/marketplace'}`}>Home/ </Link>
        <Link className="text-sm text-gray-500 font-normal hover:text-gray-800" href={`${'/marketplace/products'}`}>All Products/</Link>
        <h2 className="text-sm font-normal text-gray-800">{t(product.category)}</h2>
      </div>

      <section className="grid py-5 border-b border-gray-200 grid-cols-12 w-full gap-6">
        <div className="col-span-12 lg:col-span-6 flex w-full flex-col gap-4">
          <ProductImageGallery images={product.images} />
        </div>

        <div className="col-span-12 lg:col-span-6 w-full flex flex-col gap-6">
          <div>
            <span className="text-sm text-[#2D5016] font-medium">
              {t(product.category)}
            </span>
            <h1 className="text-2xl sm:text-3xl font-semibold mt-2">
              {t(product.title)}
            </h1>
            <p className="text-gray-600 mt-2 w-full">
              {t(product.shortDesc)}
            </p>
          </div>

          <div className="flex items-center max-[470px]:items-start max-[470px]:flex-col gap-2 sm:gap-6">
            <h2 className="text-2xl gap-1 flex items-end font-semibold text-[#2D5016]">
              SAR {product.price}
              <span className="text-sm font-normal text-gray-500">/Unit</span>
              <span className="text-sm font-normal text-gray-500">/VAT Included</span>
            </h2>

            <span
              className={`px-3 py-1 text-sm rounded-md font-medium ${product.stock === "In Stock"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
                }`}
            >
              {t(product.stock)}
            </span>
          </div>

          <div className="flex gap-6 text-sm text-gray-600">
            <span>Location: {t(product.location)}</span>
            <span>⭐ {product.reviews} / 5 Reviews</span>
          </div>

          <div className="grid items-center  grid-cols-2 gap-2 w-full">
            <div className="flex items-center w-full gap-1">
              <span className='w-10 h-10 flex items-center justify-center rounded-full bg-[#DCFCE7] text-[#2D5016]'><MdOutlineVerifiedUser /></span>
              <div className='flex flex-col items-start'>
                <h3 className="text-lg text-black">MOQ</h3>
                <p className='text-sm text-gray-500'>{t(product.specifications.MOQ)}</p>
              </div>
            </div>
            <div className="flex items-center w-full gap-1">
              <span className='w-10 h-10 flex items-center justify-center rounded-full bg-[#DCFCE7] text-[#2D5016]'><LuClock4 /></span>
              <div className='flex  flex-col items-start'>
                <h3 className="text-lg text-black">Lead Time</h3>
                <p className='text-sm text-gray-500'>{t(product.specifications.leadTime)}</p>
              </div>
            </div>
          </div>

          {product.customize === true && (
            <>
              <Link href={`/marketplace/products/custom-product`}>
                <button
                  className="flex w-full items-center rounded-md gap-1 justify-center bg-[#D4B483] hover:bg-[#c3a06e] text-[#2D5016] font-semibold px-4 py-3 text-sm max-[400px]:text-xs">
                  <CiPen className="text-lg" />
                  Customize
                </button>
              </Link>

              <Link href={`/marketplace/additive-manufacturing`}>
                <button
                  className="flex w-full items-center justify-center gap-1 bg-[#D4B483] hover:bg-[#c3a06e] text-[#2D5016] font-semibold px-4 py-3 text-sm max-[400px]:text-xs">
                  <IoPrintOutline className="text-lg" />
                  Additive Manufacturing
                </button>
              </Link>
            </>
          )}



          <ProductActions
            onAddToCart={(qty) => {
              addItems({
                id: product.id,
                image: product.images[0],
                title: product.title,
                price: product.price,
                quantity: qty,
              });
              alert("Product added successfully!");
            }}
            onRequestRFQ={() => console.log("Request RFQ clicked")}
          />
          <div className="px-4 flex flex-row max-[400px]:items-start gap-2 max-[400px]:flex-col items-center justify-between w-full py-2 border border-gray-200">
            <div className="flex items-center gap-2">
              <span className="bg-gray-200 text-gray-500 h-14 w-14 rounded-sm flex items-center justify-center">LOGO</span>
              <div>
                <h2 className='text-black font-semibold text-lg'>Saudi Machinery Co.</h2>
                <p className='text-gray-500 font-normal text-sm'>Riyadh, Industrial City 2</p>
              </div>
            </div>
            <button className="bg-[#2D5016] text-white px-4 py-2 rounded-sm text-sm">View</button>
          </div>
        </div>
      </section>

      <div className="flex py-10 w-full mt-4 flex-col items-start gap-5">
        <h1 className="text-2xl font-bold text-black">Specifications</h1>
        <div className="grid w-full gap-2 sm:items-center items-start sm:gap-6 grid-cols-1 sm:grid-cols-2">
          <div className="flex items-center w-full justify-between border-b border-gray-200">
            <p className='text-lg font-normal text-gray-500'>Model Number</p>
            <p className='text-lg font-normal text-gray-500'>{t(product.specifications.modelNumber)}</p>
          </div>
          <div className="flex items-center w-full justify-between border-b border-gray-200">
            <p className='text-lg font-normal text-gray-500'>Power</p>
            <p className='text-lg font-normal text-gray-500'>{t(product.specifications.power)}</p>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default page