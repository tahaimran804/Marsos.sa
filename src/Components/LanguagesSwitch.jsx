"use client";
import { useState, useRef, useEffect } from "react";
import { GrLanguage } from "react-icons/gr";
import en from "@/src/i18n/messages/en.json";
import ur from "@/src/i18n/messages/ur.json";
import ar from "@/src/i18n/messages/ar.json";
import { useLanguage } from "@/src/Context/LanguageContext";

const LanguagesSwitch = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLang = (value) => {
    setLang(value);
    setOpen(false);
  };

  return (
    <div className="relative mt-2" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="text-black cursor-pointer max-[380px]:text-sm md:text-lg lg:text-xl"
      >
        <GrLanguage />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 sm:w-52 shadow-md bg-white border border-gray-200 rounded-md  p-2 flex flex-col gap-2 z-50">
          <button
            onClick={() => changeLang("en")}
            className={`text-left cursor-pointer hover:bg-gray-100 px-2 py-1 rounded
            ${lang === "en" ? "bg-gray-200" : ""}
            `}
          >
            🇺🇸 English
          </button>

          <button
            onClick={() => changeLang("ur")}
            className={`text-left cursor-pointer hover:bg-gray-100 px-2 py-1 rounded
            ${lang === "ur" ? "bg-gray-200" : ""}
            `}
          >
            🇵🇰 Urdu
          </button>

          <button
            onClick={() => changeLang("ar")}
            className={`text-left cursor-pointer hover:bg-gray-100 px-2 py-1 rounded
            ${lang === "ar" ? "bg-gray-200" : ""}
            `}
          >
            🇸🇦 Arabic
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguagesSwitch