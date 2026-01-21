import React from 'react'
import Container from '@/src/Components/Container'
import Link from 'next/link';
import HeadingAndView from '@/src/Components/HeadingAndView';

const BrowsebyCategory = () => {
  const BrowsebyCategoryData = [
    {
      id: 1,
      name: "Plastic",
      items: '2.5k+',
      imageUrl: "/Plastic.jpg",
      Url: "#",
    },
    {
      id: 2,
      name: "Paper",
      items: '12k+',
      imageUrl: "/Paper.jpg",
      Url: "#",
    },
    {
      id: 3,
      name: "Wood",
      items: '5k+',
      imageUrl: "/Wood.jpg",
      Url: "#",
    },
    {
      id: 4,
      name: "Raw Materials",
      items: '8k+',
      imageUrl: "/Rawmeterial.jpg",
      Url: "#",
    },
  ]

  return (
    <Container>
      <section className='flex py-6 flex-col gap-4 items-start'>
        <HeadingAndView Heading="Browse by Category" url="#" />
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
          {BrowsebyCategoryData.map((item) => {
            return (
              <Link href={item.Url} key={item.id}>
                <div className="w-full h-64 md:h-72 lg:h-90 cursor-pointer relative overflow-hidden rounded-md group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-2 left-2 z-10 flex flex-col items-start">
                    <h1 className="text-xl font-bold text-white">{item.name}</h1>
                    <p className="text-xs text-gray-300">{item.items} Items</p>
                  </div>
                </div>
              </Link>
            )
          })}

        </div>
      </section>
    </Container>
  )
}

export default BrowsebyCategory