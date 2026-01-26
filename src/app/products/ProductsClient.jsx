"use client"
import React, { useEffect, useMemo, useState } from 'react'
import Container from '@/src/Components/Container'
import ProductAsidebar from '@/src/Components/ProductAsidebar'
import { BsSortDown, BsSortUp } from "react-icons/bs";
import ProductCard from '@/src/Components/ProductCard';
import GridToCol from '@/src/Components/GridToCol';
import { AllProducts } from '@/src/Data/ProductData';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/src/Context/LanguageContext';

const page = () => {
  const [isGrid, setIsGrid] = useState(true)
  const searchParams = useSearchParams();
  const { t } = useLanguage()
  const categoryFromUrl = searchParams.get("category");
  const [filters, setFilters] = useState({
    categories: [],
    locations: [],
    minPrice: "",
    maxPrice: "",
    sort: ""
  })
  useEffect(() => {
    if (categoryFromUrl) {
      setFilters(prev => ({
        ...prev,
        categories: [categoryFromUrl]
      }))
    }
  }, [categoryFromUrl])
  const filteredProducts = useMemo(() => {
    let data = [...AllProducts]
    if (filters.categories.length > 0) {
      data = data.filter(p =>
        filters.categories.includes(p.category)
      )
    }
    if (filters.locations.length > 0) {
      data = data.filter(p =>
        filters.locations.includes(p.location)
      )
    }
    if (filters.minPrice) {
      data = data.filter(
        p => p.price >= Number(filters.minPrice)
      )
    }
    if (filters.maxPrice) {
      data = data.filter(
        p => p.price <= Number(filters.maxPrice)
      )
    }
    if (filters.sort === "low") {
      data.sort((a, b) => a.price - b.price)
    }
    if (filters.sort === "high") {
      data.sort((a, b) => b.price - a.price)
    }

    return data
  }, [filters])
  const categories = [...new Set(AllProducts.map(p => p.category))]
  const locations = [...new Set(AllProducts.map(p => p.location))]

  return (
    <Container>
      <div className='grid w-full grid-cols-12 py-5 sm:py-10 gap-4 items-start'>
        <div className='col-span-3 max-[800px]:col-span-12 w-full h-120 overflow-y-auto no_scrollbar'>
          <ProductAsidebar
            categories={categories}
            locations={locations}
            filters={filters}
            setFilters={setFilters} />
        </div>
        <section className='col-span-9 max-[800px]:col-span-12 w-full h-full flex flex-col gap-3 items-start'>
          <div className='flex flex-row max-[330px]:flex-col items-start sm:items-center  justify-between w-full'>
            <h1 className='text-lg sm:text-2xl font-semibold flex items-center gap-1'>
              {t("all_product")}
              <span className='text-sm sm:text-lg font-normal text-gray-500'>({filteredProducts.length})</span>
            </h1>

            <div className='flex sm:flex-row flex-col max-[330px]:flex-row items-end sm:items-center gap-1.5 sm:gap-4'>
              <select
                onChange={(e) =>
                  setFilters({ ...filters, sort: e.target.value })
                }
                className="w-full border border-gray-300 px-3 py-1 text-sm rounded outline-none">
                <option value="">{t('sort_featured')}</option>
                <option value="low">{t('sort_low_to_high')}</option>
                <option value="high">{t('sort_high_to_low')}</option>
              </select>
              <GridToCol isGrid={isGrid} setIsGrid={setIsGrid} />
            </div>
          </div>
          {filteredProducts.length > 0 ? (
            <div className={`w-full h-auto ${isGrid ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3" : "flex flex-col gap-4"}`}>
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isGrid={isGrid}
                />
              ))}
            </div>
          ) : (
            <div className="w-full flex h-40 border border-gray-200 items-center justify-center py-20">
              <div className="flex w-full h-full flex-col gap-4 items-center justify-center">
                <p className="text-gray-600 text-sm">
                  {t("no_products")}
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      categories: [],
                      locations: [],
                      minPrice: "",
                      maxPrice: "",
                      sort: ""
                    })
                  }
                  className="text-sm text-[#2d5016] border border-[#2d5016]
        px-4 py-1.5 hover:bg-[#2d5016] hover:text-white transition"
                >
                  {t("clear_filters")}
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </Container>
  )
}

export default page