'use client'

import React from 'react'
import { CiFilter } from "react-icons/ci";
import { useLanguage } from '@/src/Context/LanguageContext';

const ProductAsidebar = ({ filters, setFilters, categories, locations }) => {
  const { t } = useLanguage();

  const toggleValue = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(v => v !== value)
        : [...prev[key], value]
    }))
  }

  return (
    <aside className="w-full py-2 px-1.5">
      <div className='w-full flex items-center gap-1 border-b border-gray-200 pb-2 mb-4'>
        <span className="text-2xl text-black"><CiFilter /></span>
        <h2 className="text-xl font-bold text-black">
          {t('filters')}
        </h2>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">
          {t('category')}
        </h3>
        <ul className="flex flex-col gap-2 text-sm text-gray-600">
          {categories.map(cat => (
            <label key={cat} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat)}
                onChange={() => toggleValue("categories", cat)}
              />
              {t(cat)}
            </label>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">
          {t('price_range')}
        </h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder={t('min')}
            className="w-full border border-gray-300 px-2 py-1 text-sm rounded outline-none"
            onChange={(e) =>
              setFilters({ ...filters, minPrice: e.target.value })
            }
          />
          <input
            type="number"
            placeholder={t('max')}
            className="w-full border border-gray-300 px-2 py-1 text-sm rounded outline-none"
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value })
            }
          />
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">
          {t('location')}
        </h3>
        <ul className="flex flex-col gap-2 text-sm text-gray-600">
          {locations.map(loc => (
            <label key={loc} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                onChange={() => toggleValue("locations", loc)}
              />
              {t(loc)}
            </label>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default ProductAsidebar
