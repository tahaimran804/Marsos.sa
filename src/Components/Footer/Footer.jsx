"use client";

import React from 'react';
import Container from "@/src/Components/Container";
import Image from 'next/image';
import { useLanguage } from '@/src/Context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const ProductLink = [
    { id: 1, name: t("footer_product1"), url: "#" },
    { id: 2, name: t("footer_product2"), url: "#" },
    { id: 3, name: t("footer_product3"), url: "#" },
  ];

  const CompanyLink = [
    { id: 1, name: t("footer_company1"), url: "/" },
    { id: 2, name: t("footer_company2"), url: "#" },
  ];

  const ResourcesLink = [
    { id: 1, name: t("footer_resources1"), url: "#" },
    { id: 2, name: t("footer_resources2"), url: "#" },
  ];

  return (
    <section className='w-full bg-[#111827] pt-3 md:pt-6 h-auto'>
      <Container className='py-2'>
        <div className='flex items-start flex-col gap-4'>
          <div className="py-4 w-full border-b border-gray-200 grid grid-cols-12 items-start gap-6">

            <div className="flex w-full md:col-span-5 col-span-12 flex-col gap-4 items-start">
              <div className="flex items-center gap-2">
                <span>
                  <Image src="/Logo.png" width={50} height={40} alt="Logo" />
                </span>
                <div className="flex flex-col items-start">
                  <h2 className="text-xl text-white font-bold">{t("footer_company_name")}</h2>
                </div>
              </div>

              <p className="text-sm font-normal text-gray-500">
                {t("footer_description")}
              </p>
            </div>

            <div className="grid md:col-span-7 col-span-12 max-[480px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 gap-6">

              {/* Product */}
              <div className="flex mt-2 w-full flex-col gap-2 items-start">
                <h1 className="text-xl font-semibold text-white">{t("footer_products")}</h1>
                <ul className="flex flex-col gap-1 items-start">
                  {ProductLink.map((item) => (
                    <li key={item.id}>
                      <a href={item.url} className="text-sm text-gray-500 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="flex mt-2 w-full flex-col gap-2 items-start">
                <h1 className="text-xl font-semibold text-white">{t("footer_company")}</h1>
                <ul className="flex flex-col gap-1 items-start">
                  {CompanyLink.map((item) => (
                    <li key={item.id}>
                      <a href={item.url} className="text-sm text-gray-500 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="flex mt-2 w-full flex-col gap-2 items-start">
                <h1 className="text-xl font-semibold text-white">{t("footer_resources")}</h1>
                <ul className="flex flex-col gap-1 items-start">
                  {ResourcesLink.map((item) => (
                    <li key={item.id}>
                      <a href={item.url} className="text-sm text-gray-500 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          <footer className='flex flex-col sm:flex-row items-center sm:justify-between justify-center gap-2 w-full py-2 sm:py-4'>
            <p className='text-sm text-gray-500'>
              © {year} {t("footer_company_name")}. {t("footer_rights")}
            </p>
            <div className='flex items-center gap-2'>
              <button className='text-sm text-gray-500 hover:text-white transition-colors'>
                {t("footer_privacy")}
              </button>
              <button className='text-sm text-gray-500 hover:text-white transition-colors'>
                {t("footer_terms")}
              </button>
            </div>
          </footer>
        </div>
      </Container>
    </section>
  )
}

export default Footer;
