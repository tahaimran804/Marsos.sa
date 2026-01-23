import React from 'react'
import Container from '@/src/Components/Container'
import Link from 'next/link'
import HeadingAndView from '@/src/Components/HeadingAndView'
import { AllProducts } from '@/src/Data/ProductData'

const BrowsebyCategory = () => {
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

  return (
    <Container>
      <section className='flex py-6 flex-col gap-4 items-start'>
        <HeadingAndView Heading="Browse by Category" url="products" />

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/products?category=${encodeURIComponent(cat.name)}`}
            >
              <div className="w-full h-64 md:h-72 lg:h-90 cursor-pointer relative overflow-hidden rounded-md group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${cat.imageUrl}')` }}
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-2 left-2 z-10">
                  <h1 className="text-xl font-bold text-white">
                    {cat.name}
                  </h1>
                  <p className="text-xs text-gray-300">
                    {cat.count}+ Items
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default BrowsebyCategory
