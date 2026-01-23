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
    // 🔥 Background Container ke bahar
    <section className="bg-red-500 min-h-screen py-12">
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-1 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400">
            {t("quotation_Heading")}
          </h1>
          <p className="text-sm text-blue-200">
            {t("quotation_Desc")}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white shadow-xl border border-gray-200 p-6 rounded-md flex flex-col gap-4"
        >
          {/* Product */}
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

          {/* Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-700 text-white px-6 py-3 rounded-md font-bold hover:bg-green-800 transition"
          >
            <CiPaperplane className="text-xl" />
            {t("quotation_submit_button")}
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Page;
