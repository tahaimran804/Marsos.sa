"use client"

import React from 'react'
import Container from '@/src/Components/Container'
import Link from 'next/link';
import Image from 'next/image';
import HeadingAndView from '@/src/Components/HeadingAndView';
import { AllProducts } from '@/src/Data/ProductData';
import { useLanguage } from '@/src/Context/LanguageContext';

const FeatureProducts = () => {
  const { t } = useLanguage()
  const featuredProducts = AllProducts
    .filter(p => p.featured)
    .slice(0, 4)
  return (
    <Container>
      <section className="flex py-6 flex-col gap-4 items-start">
        <HeadingAndView Heading={t('feature_heading')} url="products" />
        <div className="grid max-[550px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {featuredProducts.map((product) => (
            <Link
              href={`/products/${product.slug}`}
              key={product.id}
              className="flex flex-col border rounded-sm border-gray-200 bg-white hover:shadow-2xl duration-500 gap-2 items-start"
            >
              <Image
                src={product.images[0]}
                width={300}
                height={200}
                alt={product.title}
                className="w-full h-60 rounded-t-sm object-cover"
              />

              <div className="flex flex-col px-3 w-full py-3 cursor-pointer gap-3 items-start">
                <div className="flex flex-col items-start">
                  <h2 className="text-lg font-bold text-black">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {product.company}
                  </p>
                </div>

                <div className="flex items-start justify-between w-full">
                  <h3 className="text-lg font-normal text-[#2D5016]">
                    SAR {product.price}
                  </h3>
                  <span className="bg-gray-200 px-2 rounded-sm text-black text-xs py-1">
                    {product.specifications.MOQ}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default FeatureProducts;
