"use client";

import React, { useState } from "react";
import Container from "@/src/Components/Container";
import { useLanguage } from "@/src/Context/LanguageContext";
import { CiPaperplane } from "react-icons/ci";

const Page = () => {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    product: "",
    quantity: "",
    unit: "Pieces",
    specifications: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <Container>
      <section className="w-full h-full py-8">
        <div className="flex flex-col items-center text-center gap-1 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">
            {t("quotation_Heading")}
          </h1>
          <p className="text-sm text-gray-600">
            {t("quotation_Desc")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-180 mx-auto bg-white shadow-xl border border-gray-200 py-5 rounded-md px-4 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              {t("quotation_product_label")} *
            </label>
            <input
              type="text"
              name="product"
              value={form.product}
              onChange={handleChange}
              placeholder={t("quotation_product_placeholder")}
              className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

          {/* Quantity */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              {t("quotation_quantity_label")} *
            </label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder={t("quotation_quantity_placeholder")}
              className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

          {/* Unit */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              {t("quotation_unit_label")} *
            </label>
            <select
              name="unit"
              value={form.unit}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-700"
            >
              <option value="Pieces">{t("unit_pieces")}</option>
              <option value="Kg">{t("unit_kg")}</option>
              <option value="Meter">{t("unit_meter")}</option>
            </select>
          </div>

          {/* Specifications */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              {t("quotation_specs_label")} *
            </label>
            <textarea
              name="specifications"
              value={form.specifications}
              onChange={handleChange}
              placeholder={t("quotation_specs_placeholder")}
              className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-700 resize-none h-28"
              required
            />
          </div>

          <button
            type="submit"
            className="group flex items-center justify-center gap-1 bg-[#2D5016] text-white px-6 py-3 rounded-md hover:bg-[#223d0f] font-bold transition"
          >
            <CiPaperplane
              className="text-xl transition-transform duration-300 group-hover:rotate-300"
            />
            {t("quotation_submit_button")}
          </button>

        </form>
      </section>
    </Container>
  );
};

export default Page;
