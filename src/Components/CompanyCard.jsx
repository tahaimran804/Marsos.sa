"use client";
import { FaStar, FaRegEye, FaHeart } from "react-icons/fa";
import {
  CiStar, CiLocationOn, CiClock2, CiViewList, CiHeart,
} from "react-icons/ci";
const CompanyCard = ({ isGrid }) => {
  return (
    <>
      {isGrid ? (
        <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm flex flex-col gap-4 items-start">

          {/* Logo */}
          <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-md text-gray-400 font-semibold">
            SAI
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex justify-between flex-col gap-2 items-start">
              <div>
                <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
                  Saudi Advanced Industries
                  <span className="text-green-500 text-sm">✔</span>
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Riyadh · Riyadh 2nd Industrial City
                </p>
              </div>

              <div className="flex items-center gap-1 text-xs">
                <div className="flex items-center gap-1 text-yellow-500 justify-end">
                  <FaStar />
                  <span className="font-medium">4.9</span>
                </div>
                <p className="text-gray-400">Response: 2h</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Manufacturing",
                "Metal",
                "Spare Parts",
                "CNC Machining",
                "ISO Certified",
                "Make-to-Order",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs border rounded-full text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Info */}
            <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
              <div className="flex gap-4">
                <span>⚡ Capacity: 85%</span>
                <span>🛡 2 Certs</span>
              </div>

              <div className="flex gap-3 text-gray-600 text-sm">
                <FaRegEye className="cursor-pointer" />
                <FaHeart className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <button className="bg-[#274e13] w-full text-white text-xs px-4 py-2 rounded-md">
              Contact
            </button>
            <button className="border w-full text-xs px-4 py-2 rounded-md">
              Request Quote
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col sm:flex-row gap-4">

          {/* LEFT: Logo */}
          <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-semibold text-lg">
            SAI
          </div>

          {/* CENTER: Content */}
          <div className="flex-1 flex flex-col justify-between">

            {/* Top */}
            <div className="flex justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Saudi Advanced Industries
                </h3>

                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <CiLocationOn className="text-sm" />
                  Riyadh · Riyadh 2nd Industrial City
                </p>
              </div>

              <div className="text-right text-xs shrink-0">
                <div className="flex items-center gap-1 text-yellow-500 justify-end">
                  <CiStar />
                  <span className="font-medium">4.9</span>
                </div>
                <p className="text-gray-400 flex items-center gap-1 justify-end mt-0.5">
                  <CiClock2 /> 2h response
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "Manufacturing",
                "Metal",
                "Spare Parts",
                "CNC Machining",
                "ISO Certified",
                "Make-to-Order",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[11px] border border-gray-200 rounded-full text-gray-600 bg-gray-50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Info */}
            <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
              <div className="flex gap-4">
                <span>⚡ Capacity: 85%</span>
                <span>🛡 2 Certs</span>
              </div>

              <div className="flex gap-3 text-lg text-gray-500">
                <CiViewList className="cursor-pointer hover:text-black" />
                <CiHeart className="cursor-pointer hover:text-red-500" />
              </div>
            </div>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex sm:flex-col gap-2 sm:w-[130px]">
            <button className="w-full bg-[#274e13] hover:bg-[#1f3d0f] text-white text-xs py-2 rounded-md">
              Contact
            </button>
            <button className="w-full border border-gray-300 hover:border-black text-xs py-2 rounded-md">
              Request Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyCard;
