"use client";

import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";

const ProductActions = ({ onAddToCart, onRequestRFQ }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="grid grid-cols-12 gap-3 items-center">
      <div className="max-[400px]:col-span-12 md:col-span-3 col-span-6 flex items-center justify-between border border-gray-500 px-1 rounded-md overflow-hidden">
        <button
          onClick={decrease}
          className="px-2 rounded-sm py-2 bg-gray-200 hover:bg-gray-300 transition"
        >
          <AiOutlineMinus />
        </button>
        <span className="px-4 py-2 text-center w-12">{quantity}</span>
        <button
          onClick={increase}
          className="px-2 rounded-sm py-2 bg-gray-200 hover:bg-gray-300 transition"
        >
          <AiOutlinePlus />
        </button>
      </div>

      {/* ===== Add to Cart ===== */}
      <button
        onClick={() => onAddToCart(quantity)}
        className="col-span-6 max-[400px]:col-span-12 flex items-center justify-center gap-2 px-6 py-3 bg-[#2D5016] text-white rounded-md hover:bg-[#244012] transition"
      >
        <AiOutlineShoppingCart className="text-xl" />
        Add to Cart
      </button>

      {/* ===== Request RFQ ===== */}
      <button
        onClick={onRequestRFQ}
        className="md:col-span-3 col-span-6 max-[400px]:col-span-12 flex items-center whitespace-nowrap justify-center gap-2 border border-[#2D5016] text-[#2D5016] px-6 py-3 rounded-md hover:bg-[#2D5016] hover:text-white transition"
      >
        <BsFileEarmarkText className="text-lg" />
        Request RFQ
      </button>
    </div>
  );
};

export default ProductActions;
