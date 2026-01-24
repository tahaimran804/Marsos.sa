"use client"

import Image from 'next/image'
import Link from 'next/link'
import { CiPen } from "react-icons/ci";
import { useLanguage } from '@/src/Context/LanguageContext';

const ProductCard = ({ product, isGrid }) => {
  const { t } = useLanguage()
  if (isGrid) {
    return (
      <div
        key={product.id}
        className="flex flex-col border rounded-md border-gray-200 bg-white hover:shadow-2xl duration-500 gap-2 items-start"
      >
        <Link href={`/products/${product.slug}`} className="w-full">
          <Image
            src={product.images[0]}
            width={300}
            height={200}
            alt={product.title}
            className="w-full h-60 rounded-t-md object-cover"
          />
        </Link>

        <div className="flex flex-col px-3 w-full py-3 gap-3">
          <div className="flex items-start flex-wrap justify-between w-full">
            <button className='px-3 py-1.5 rounded-full bg-[#F0FDF4] text-[#2D5016] text-xs'>Verified Supplier</button>
            <p className='text-sm max-[400px]:text-xs text-gray-500'>{product.category}</p>
          </div>
          <div>
            <h2 className="text-lg max-[400px]:text-[16px] font-normal text-black">{product.title}</h2>
            <p className="text-sm max-[400px]:text-xs text-gray-500">{product.company}</p>
          </div>

          <div className="flex items-center justify-between w-full">
            <div>
              <h3 className="text-lg text-[#2D5016]">SAR {product.price}</h3>
              <span className="bg-gray-200 px-2 rounded-sm text-xs py-1">
                MOQ: {product.specifications.MOQ}
              </span>
            </div>

            {product.customize ? (
              <button

                className="flex items-center gap-1 bg-[#D4B483] hover:bg-[#c3a06e] text-[#2D5016] font-semibold px-4 py-2 text-sm max-[400px]:text-xs">
                <CiPen className="text-lg" />
                <Link href={`/products/custom-product`}>
                  Customize
                </Link>
              </button>
            ) : (
              <button className="bg-[#2D5016] text-white px-4 py-2 text-sm max-[400px]:text-xs">
                <Link href={`/products/${product.slug}`}>
                  View
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ================= LIST CARD =================
  return (
    <div
      key={product.id}
      href={product.slug}
      className="flex border border-gray-200 rounded-md bg-white hover:shadow-xl duration-300 w-full"
    >

      <Link href={`/products/${product.slug}`}>

        <Image
          src={product.images[0]}
          width={200}
          height={150}
          alt={product.title}
          className="w-42 h-full sm:h-40 object-cover rounded-l-md"
        />

      </Link>
      <div className="flex flex-col justify-between max-[600px]:gap-2 p-4 w-full">
        <div className='flex items-start sm:items-center sm:flex-row flex-col gap-1  justify-between'>
          <div className='flex items-start flex-col gap-3'>
            <h2 className="text-sm sm:text-lg font-medium">{t(product.title)}</h2>
            <p className="text-sm max-[400px]:text-xs text-gray-500">{t(product.company)}</p>
          </div>

          <div className="flex items-start sm:items-end flex-col gap-2 sm:gap-1">
            <button className='px-3 py-1.5 rounded-full bg-[#F0FDF4] text-[#2D5016] text-xs'>Verified Supplier</button>
            <p className='text-sm max-[400px]:text-xs text-gray-500'>{t(product.category)}</p>
          </div>
        </div>

        <div className="flex items-center max-[410px]:items-start max-[410px]:gap-2  max-[410px]:flex-col justify-between">
          <div>
            <h3 className="text-[#2D5016] font-semibold">SAR {product.price}</h3>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded">
              MOQ: {product.specifications.MOQ}
            </span>

          </div>
          {product.customize ? (
            <button

              className="flex items-center gap-1 bg-[#D4B483] hover:bg-[#c3a06e] text-[#2D5016] font-semibold px-4 py-2 text-sm max-[400px]:text-xs">
              <CiPen className="text-lg" />
              <Link href={`/products/custom-product`}>
                Customize
              </Link>
            </button>
          ) : (
            <button className="bg-[#2D5016] text-white px-4 py-2 text-sm max-[400px]:text-xs">
              <Link href={`/products/${product.slug}`}>
                View
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
