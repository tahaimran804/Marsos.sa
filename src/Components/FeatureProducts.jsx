
import React from 'react'
import Container from '@/src/Components/Container'
import Link from 'next/link';
import Image from 'next/image';
import HeadingAndView from '@/src/Components/HeadingAndView';

const featuredProducts = [
  {
    id: 1,
    title: "CNC Milling Machine X500",
    company: "TechCorp Industries",
    price: "SAR 45,000",
    moq: "MOQ: 5 Tons",
    image: "/Product1.jpg",
    slug: "/products/cnc-milling-machine-x500",
  },
  {
    id: 2,
    title: "Laser Cutting Machine Pro",
    company: "LaserTech",
    price: "SAR 62,000",
    moq: "MOQ: 2 Units",
    image: "/Product2.jpg",
    slug: "/products/laser-cutting-machine-pro",
  },
  {
    id: 3,
    title: "Industrial 3D Printer Z9",
    company: "PrintWorks",
    price: "SAR 88,000",
    moq: "MOQ: 1 Unit",
    image: "/Product3.jpg",
    slug: "/products/industrial-3d-printer-z9",
  },
  {
    id: 4,
    title: "Hydraulic Press Machine H300",
    company: "HydroTech",
    price: "SAR 71,500",
    moq: "MOQ: 3 Units",
    image: "/Product4.jpg",
    slug: "/products/hydraulic-press-machine-h300",
  },
];
const FeatureProducts = () => {
  return (
    <Container>
      <section className="flex py-6 flex-col gap-4 items-start">
        <HeadingAndView Heading="Feature Products" url="#" />
        <div className="grid max-[550px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {featuredProducts.map((product) => (
            <Link
              href={product.slug}
              key={product.id}
              className="flex flex-col border rounded-sm border-gray-100 bg-white hover:shadow-2xl duration-500 gap-2 items-start"
            >
              <Image
                src={product.image}
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
                    {product.price}
                  </h3>
                  <span className="bg-gray-200 px-2 rounded-sm text-black text-xs py-1">
                    {product.moq}
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
