"use client";

import Container from "@/src/Components/Container";
import { CartContext, useCart } from "@/src/Context/CartContext";
import { useLanguage } from "@/src/Context/LanguageContext";
import Image from "next/image";
import React, { useContext } from "react";
import { IoTrashOutline } from "react-icons/io5";

const CartPage = () => {
  const { t } = useLanguage();
  const { cartItems, deleteItems } = useContext(CartContext);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <Container>
      <section className="w-full h-full py-10 flex flex-col gap-6 items-start">
        <div className="flex items-start flex-col w-full justify-start gap-2">
          <h1 className="text-3xl font-bold text-black">
            {t("shoping_hedd")}
          </h1>
          {cartItems.length === 0 && (
            <p className="text-sm font-normal text-gray-500">
              {t("cart_empty")}
            </p>
          )}
        </div>
        <section className="grid grid-cols-12 gap-6 w-full items-start">
          <div className="col-span-12 lg:col-span-8 w-full flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border border-gray-200 shadow-lg justify-start w-full gap-2 py-2 px-2 h-40 bg-white rounded-md"
              >
                <div className="w-32 h-28 bg-gray-200 rounded-sm relative">
                  <Image src={item.image || "/placeholder.png"} fill alt={t(item.title)} className="object-cover rounded-sm" />
                </div>

                <div className="flex sm:flex-row flex-col items-start sm:items-center w-full gap-2 justify-between">
                  <div className="flex flex-col gap-1 items-start">
                    <h1 className="text-lg font-semibold text-black">
                      {t(item.title)}
                    </h1>
                    <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md text-sm">
                      Qty: {item.quantity}
                    </button>
                  </div>

                  <div className="flex flex-col gap-1 items-start sm:items-end">
                    <h1 className="text-lg text-[#2D5016]">
                      SAR {item.price * item.quantity}
                    </h1>
                    <button
                      onClick={() => deleteItems(item.id)}
                      className="px-4 py-2 bg-gray-200 text-red-500 rounded-md text-sm"
                    >
                      <IoTrashOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 w-full">
            <div className="bg-white border border-gray-200 rounded-md shadow-lg p-4 flex flex-col gap-4">
              <h2 className="text-xl font-bold text-black">
                {t("order_summary")}
              </h2>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{t("subtotal")}</span>
                <span>SAR {subtotal}</span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{t("shipping")}</span>
                <span>{t("free")}</span>
              </div>

              <div className="border-t border-gray-200 pt-3 flex items-center justify-between font-bold text-black">
                <span>{t("total")}</span>
                <span>SAR {subtotal}</span>
              </div>
              <button
                className={`w-full mt-2 py-3 rounded-md font-bold transition
    ${cartItems.length === 0
                    ? "bg-gray-400 cursor-not-allowed text-gray-200"
                    : "bg-[#2D5016] text-white hover:bg-[#223d0f]"}`
                }
                disabled={cartItems.length === 0}
              >
                {t("checkout")}
              </button>
            </div>
          </div>
        </section>
      </section>
    </Container>
  );
};

export default CartPage;
