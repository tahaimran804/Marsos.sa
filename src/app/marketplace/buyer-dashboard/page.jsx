"use client";

import Container from "@/src/Components/Container";
import { useLanguage } from "@/src/Context/LanguageContext";
import React from "react";
import { BsBox2 } from "react-icons/bs";

const page = () => {
  const { t } = useLanguage();

  return (
    <Container>
      <section className="w-full h-full py-10 flex flex-col gap-6 items-start">
        {/* Header */}
        <div className="flex items-center w-full justify-between gap-2">
          <h1 className="text-3xl font-bold text-black">
            {t("buyer_hedding")}
          </h1>
          <button className="text-sm font-normal text-gray-500 cursor-pointer">
            {t("profile_set")}
          </button>
        </div>

        <section className="flex flex-col gap-6 w-full items-start">
          {/* Stats Card */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 w-full">
            <div className="bg-white border flex items-center gap-2 justify-start border-gray-100 h-32 rounded-md px-2 py-2">
              <span className="bg-[#EFF6FF] w-10 flex items-center justify-center h-10 rounded-sm text-lg text-blue-600">
                <BsBox2 />
              </span>
              <div className="flex flex-col items-start">
                <h1 className="text-2xl font-bold text-black">4</h1>
                <p className="text-sm font-normal text-gray-500">
                  {t("active_orders")}
                </p>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white gap-2 items-start w-full">
            <h1 className="text-xl font-bold text-black px-4 py-3 w-full border-b border-gray-200">
              {t("recent_orders")}
            </h1>

            <div className="w-full overflow-x-auto">
              <table className="w-full overflow-auto no_scrollbar text-sm text-left">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-4 py-2 font-medium">
                      {t("order_id")}
                    </th>
                    <th className="px-4 py-2 font-medium">
                      {t("order_status")}
                    </th>
                    <th className="px-4 py-2 font-medium">
                      {t("order_total")}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t border-gray-200 hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-medium text-gray-800">
                      #ORD-001
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 text-xs font-semibold">
                        {t("order_processing")}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      SAR 8,500
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </Container>
  );
};

export default page;
