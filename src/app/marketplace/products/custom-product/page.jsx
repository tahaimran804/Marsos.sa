"use client";
import React, { useState } from "react";
import { CiPen } from "react-icons/ci";
import Container from "@/src/Components/Container";
import { useLanguage } from "@/src/Context/LanguageContext";

const sizes = ["7oz", "8oz", "12oz", "16oz"];
const handleTypes = ["Single Wall", "Double Wall", "Ripple Wall"];
const colors = ["#ffffff", "#000000", "#c4a484", "#2D5016", "#e11d48"];
const quantities = [500, 1000, 5000];

const ProductCustomization = ({ onAddToCart, onRequestRFQ }) => {
  const { t } = useLanguage();
  const [size, setSize] = useState("12oz");
  const [handle, setHandle] = useState("Single Wall");
  const [color, setColor] = useState("#ffffff");
  const [qty, setQty] = useState(500);
  const [uploadedLogo, setUploadedLogo] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedLogo(URL.createObjectURL(file));
  };

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-8 py-6 rounded-md bg-white">
        {/* Preview Section */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="relative w-60 h-60">
            {/* Cup Base */}
            <div
              className="w-full h-full rounded-md border border-gray-200"
              style={{ backgroundColor: color }}
            />
            {/* Uploaded Logo */}
            {uploadedLogo && (
              <img
                src={uploadedLogo}
                alt="Uploaded Logo"
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
          </div>
          <p className="text-gray-500 text-sm">
            {t("design_heading")}

          </p>
        </div>




        <div className="flex-1 flex flex-col gap-5">

          <div className="col-span-12 lg:col-span-6 w-full flex flex-col gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold mt-2">
                {t("product_title")}
              </h1>
              <p className="text-gray-600 mt-2">
                {t("product_desc")}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">{t("cup_size")}</h3>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`px-4 py-1.5 text-sm border rounded-sm ${size === s ? "border-[#2D5016] bg-green-50 text-[#2D5016]" : "border-gray-300"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Handle Type */}
          <div>
            <h3 className="text-sm font-medium mb-2">{t("handle_type")}</h3>
            <div className="flex gap-2 flex-wrap">
              {handleTypes.map((h) => (
                <button key={h} onClick={() => setHandle(h)} className={`px-4 py-1.5 text-sm border rounded-sm ${handle === h ? "border-[#2D5016] bg-green-50 text-[#2D5016]" : "border-gray-300"}`}>
                  {t(h)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">{t("base_color")}</h3>
            <div className="flex gap-3">
              {colors.map((c) => (
                <button key={c} onClick={() => setColor(c)} className={`w-6 h-6 rounded-full border-2 ${color === c ? "border-[#2D5016]" : "border-gray-300"}`} style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>

          <div className="border border-dashed border-gray-300 rounded-md p-4 text-center relative">
            <CiPen className="mx-auto text-2xl text-gray-500" />
            <p className="text-sm text-gray-600">{t("upload_logo")}</p>
            <p className="text-xs text-gray-400">{t("upload_note")}</p>
            <input type="file" className="hidden" id="uploadLogo" onChange={handleUpload} />
            <label htmlFor="uploadLogo" className="absolute inset-0 cursor-pointer"></label>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">{t("quan")}</h3>
            <div className="flex gap-2">
              {quantities.map((q) => (
                <button key={q} onClick={() => setQty(q)} className={`px-4 py-1.5 text-sm border rounded-sm ${qty === q ? "border-[#2D5016] bg-green-50 text-[#2D5016]" : "border-gray-300"}`}>
                  {q}+ {t("units")}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between border-t pt-3">
            <span>{t("total_amount")}</span>
            <span className="font-semibold text-[#2D5016]">
              SAR {(qty * 0.45).toFixed(2)}
            </span>
          </div>

          <div className="flex gap-3">
            <button onClick={() => onAddToCart(qty)} className="flex-1 bg-[#2D5016] text-white py-2">
              {t("add_to_cart")}
            </button>
            <button onClick={onRequestRFQ} className="flex-1 border border-[#2D5016] text-[#2D5016] py-2">
              {t("request_quote")}
            </button>
          </div>

          {/* Technical Details & Dimensions */}
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Technical Details</h3>
            <table className="w-full text-left text-xs text-gray-500 border border-gray-200 rounded-md">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-2 py-1">Material</td>
                  <td className="px-2 py-1">Food Grade Paperboard + PE Coating</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-2 py-1">Printing / Graphic</td>
                  <td className="px-2 py-1">Offset / Flexography / Digital</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-2 py-1">Unit Resources</td>
                  <td className="px-2 py-1">1 cup = 0.12 SAR</td>
                </tr>
                <tr>
                  <td className="px-2 py-1">Certificates</td>
                  <td className="px-2 py-1">FDA Approved, FSC Certified</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-sm font-medium mb-2 mt-4">Dimensions Chart</h3>
            <table className="w-full text-left text-xs text-gray-500 border border-gray-200 rounded-md">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-2 py-1">7oz</td>
                  <td className="px-2 py-1">Top: 70mm</td>
                  <td className="px-2 py-1">Bottom: 55mm</td>
                  <td className="px-2 py-1">Height: 90mm</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-2 py-1">8oz</td>
                  <td className="px-2 py-1">Top: 75mm</td>
                  <td className="px-2 py-1">Bottom: 60mm</td>
                  <td className="px-2 py-1">Height: 95mm</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-2 py-1">12oz</td>
                  <td className="px-2 py-1">Top: 85mm</td>
                  <td className="px-2 py-1">Bottom: 65mm</td>
                  <td className="px-2 py-1">Height: 110mm</td>
                </tr>
                <tr>
                  <td className="px-2 py-1">16oz</td>
                  <td className="px-2 py-1">Top: 90mm</td>
                  <td className="px-2 py-1">Bottom: 70mm</td>
                  <td className="px-2 py-1">Height: 120mm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2 mt-4">Shipping Policy</h3>
            <table className="w-full text-left text-xs text-gray-500 border border-gray-200 rounded-md">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-2 py-1">Processing Time</td>
                  <td className="px-2 py-1">2-3 business days after order confirmation</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-2 py-1">Delivery</td>
                  <td className="px-2 py-1">5-7 business days within Saudi Arabia</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-2 py-1">International Shipping</td>
                  <td className="px-2 py-1">10-15 business days depending on location</td>
                </tr>
                <tr>
                  <td className="px-2 py-1">Shipping Charges</td>
                  <td className="px-2 py-1">Calculated at checkout based on weight & location</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>

  );
};

export default ProductCustomization;
