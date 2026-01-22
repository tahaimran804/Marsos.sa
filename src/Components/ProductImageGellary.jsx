"use client";
import { useState } from "react";
import Image from "next/image";
const ProductImageGallery = ({ images }) => {
  const safeImages = images?.length ? images : ["/placeholder.jpg"];
  const [mainImage, setMainImage] = useState(safeImages[0]);
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg overflow-hidden">
        <Image
          src={mainImage}
          alt="Product Image"
          width={600}
          height={500}
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* ===== THUMBNAILS ===== */}
      <div className="flex gap-3">
        {safeImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className={`w-20 h-20 border rounded-md overflow-hidden transition
              ${mainImage === img
                ? "border-[#2D5016]"
                : "border-gray-200 hover:border-gray-400"
              }`}
          >
            <Image
              src={img}
              alt="Thumbnail"
              width={120}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

    </div>
  );
};

export default ProductImageGallery;
