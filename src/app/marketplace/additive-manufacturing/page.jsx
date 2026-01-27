'use client'

import React, { useState, useEffect, useRef } from 'react'
import Container from '@/src/Components/Container'
import { CiPaperplane } from "react-icons/ci";
import { VscVerified } from "react-icons/vsc";
import { IoLocationOutline, IoTimeOutline, IoPrintOutline } from "react-icons/io5";
import { useLanguage } from '@/src/Context/LanguageContext';
import { useRouter } from 'next/navigation';
const ProductDetailPage = () => {
  const router = useRouter()
  const { t } = useLanguage();
  const [material, setMaterial] = useState('PLA (Standard)')
  const [finish, setFinish] = useState('Standard')
  const [dimensions, setDimensions] = useState({ L: 115, W: 85, H: 45 })
  const [color, setColor] = useState('#e5e7eb')
  const [quantity, setQuantity] = useState(1000)
  const [logoFile, setLogoFile] = useState(null)
  const [modelFile, setModelFile] = useState(null)
  const [showChat, setShowChat] = useState(false)
  const [boxColor, setBoxColor] = useState()
  const [chatMessages, setChatMessages] = useState([
    { sender: 'system', text: t("wellcome_message"), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ])
  const [userInput, setUserInput] = useState('')
  const chatEndRef = useRef(null)
  const unitPrice = 10.5
  const toolingSetup = 50
  const estLeadTime = '7-10 days'
  const totalPrice = (unitPrice * quantity + toolingSetup).toFixed(2)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const handleUserMessage = () => {
    if (!userInput.trim()) return

    const newMessage = {
      sender: 'user',
      text: userInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setChatMessages(prev => [...prev, newMessage])
    setUserInput('')
    setTimeout(() => {
      const botReply = {
        sender: 'system',
        text: t("reply"),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setChatMessages(prev => [...prev, botReply])
    }, 800)
  }

  const handleLogoUpload = (e) => setLogoFile(e.target.files[0])
  const handleModelUpload = (e) => setModelFile(e.target.files[0])

  return (
    <>
      <div className='w-full sticky z-40 top-36.5 border-b border-gray-200 left-0 bg-white h-auto py-4 shadow-lg'>
        <Container className=' flex flex-col gap-6 items-start'>
          <div className='w-full h-full flex md:flex-row flex-col items-start gap-2 md:items-center justify-start md:justify-between'>
            <div className='flex items-start gap-2'>
              <span className='w-14 h-14 bg-gray-100 border border-gray-200 flex items-center justify-center'>{t("logo")}</span>
              <div className='flex flex-col gap-1 items-start'>
                <h1 className='flex text-sm sm:text-xl text-black items-center gap-2'>{t("precision")}
                  <span className='flex rounded-full items-center gap-0.5 px-2 py-1 text-sm text-blue-500 bg-[#DBEAFE]'><VscVerified /> {t("certified")}</span>
                </h1>
                <ul className='flex w-full items-start flex-wrap gap-1.5 md:gap-3'>
                  {[
                    { id: 1, title: t("paintLoc"), icon: <IoLocationOutline /> },
                    { id: 2, title: t("resTime"), icon: <IoTimeOutline /> },
                    { id: 3, title: t("fmd"), icon: <IoPrintOutline /> }
                  ].map((item) => (
                    <li className="flex w-auto items-center gap-1" key={item.id}>
                      <span>{item.icon}</span>
                      <p className="text-xs sm:text-sm text-gray-500">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='flex items-center  gap-2'>
              <button className='px-2 py-2 rounded-sm border border-[#2D5016] text-sm bg-transparent text-[#2D5016]'>{t("saveSupplier")}</button>
              <button
                onClick={() => router.push("/marketplace/rfq")}
                className='px-2 py-2 rounded-sm border border-[#2D5016] text-sm bg-[#2D5016] text-white'>{t("startRFQ")}</button>
            </div>
          </div>
          <div className='w-full border-t lg:hidden border-gray-200 py-4 h-full flex items-start gap-2 md:items-center justify-start md:justify-between'>
            <button onClick={() => setShowChat(true)} className={`px-2 w-full py-2 border border-[#2D5016] text-sm ${showChat ? "bg-[#2D5016] text-white" : "bg-transparent text-[#2D5016]"
              }`}>{t("chatSupplier")}</button>
            <button onClick={() => setShowChat(false)} className={`px-2 w-full py-2 border border-[#2D5016] text-sm ${showChat === false ? "bg-[#2D5016] text-white" : "bg-transparent text-[#2D5016]"
              }`}>{t("configureProduct")}</button>
          </div>
        </Container>
      </div >


      <Container>
        <div className="grid grid-cols-12 gap-6 py-5">
          <div className={`xl:col-span-3 lg:col-span-4 col-span-12 border rounded-lg flex flex-col h-125 sm:h-100 lg:h-162.5 border-gray-200 bg-white shadow-lg
               ${showChat ? "flex" : "hidden lg:flex"}
              `}>
            <div className="flex items-center mb-3 py-2 px-2 border-b border-gray-200 bg-gray-100 pb-2">
              <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
              <h2 className="font-semibold text-sm md:text-lg">{t("online")}</h2>
            </div>

            <div className="flex-1 overflow-y-auto px-2 py-4 no_scrollbar">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`mb-3 flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`px-3 py-2  rounded-lg max-w-[80%] text-sm ${msg.sender === 'user' ? 'bg-[#2D5016] text-white' : 'bg-gray-100 text-gray-800'}`}>
                    {msg.text}
                  </div>
                  <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
                </div>
              ))}
              <div ref={chatEndRef}></div>
            </div>

            <div className="mt-2 p-2 flex items-center gap-2">
              <input
                type="text"
                placeholder={t("typeMessage")}
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleUserMessage()}
                className="flex-1 border px-2 py-1.5 text-sm border-gray-200 rounded-full outline-none "
              />
              <button
                onClick={handleUserMessage}
                className="bg-[#2D5016] hover:bg-[#1a310b] text-white p-2 text-lg rounded-full flex items-center justify-center"
              >
                <CiPaperplane size={20} />
              </button>
            </div>
          </div>
          <div className={`xl:col-span-6 lg:col-span-5 col-span-12 flex flex-col gap-4 
           ${showChat ? "hidden lg:flex" : "flex"}
          `}>
            <div className="border border-gray-200 rounded-lg p-4 shadow-lg bg-white">
              <h2 className="font-semibold text-lg mb-3">{t("uploadModel")}</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50">
                <p>{t("dragDrop")}</p>
                <input type="file" onChange={handleModelUpload} className="mt-2" />
              </div>
            </div>

            <div className="border rounded-lg p-4 shadow-lg border-gray-200 bg-white">
              <h2 className="font-semibold text-lg mb-4">{t("productConfig")}</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">{t("material")}</label>
                  <select value={material} onChange={e => setMaterial(e.target.value)} className="border w-full px-3 py-2 rounded-lg border-gray-200">
                    <option>PLA (Standard)</option>
                    <option>ABS</option>
                    <option>PETG</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">{t("surfaceFinish")}</label>
                  <select value={finish} onChange={e => setFinish(e.target.value)} className="border w-full px-3 py-2 rounded-lg border-gray-200">
                    <option>Standard</option>
                    <option>Polished</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <label>L (mm)</label>
                  <input type="number" value={dimensions.L} onChange={e => setDimensions({ ...dimensions, L: e.target.value })} className="border px-2 py-2 border-gray-200 rounded-lg w-full" />
                </div>
                <div>
                  <label>W (mm)</label>
                  <input type="number" value={dimensions.W} onChange={e => setDimensions({ ...dimensions, W: e.target.value })} className="border px-2 py-2 border-gray-200 rounded-lg w-full" />
                </div>
                <div>
                  <label>H (mm)</label>
                  <input type="number" value={dimensions.H} onChange={e => setDimensions({ ...dimensions, H: e.target.value })} className="border px-2 py-2 border-gray-200 rounded-lg w-full" />
                </div>
              </div>

              <div className="mt-4 flex gap-4 items-center">
                <div className='flex flex-col items-start gap-1'>
                  <label>{t("color")}</label>
                  <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-16 h-10 border-gray-200 border rounded-lg" />
                </div>
                <div className="flex-1">
                  <label>{t("quantity")}</label>
                  <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} className="border px-3 py-2 border-gray-200 rounded-lg w-full" />
                </div>
              </div>

              <div className="mt-4 border-t border-gray-200 pt-3 flex justify-between items-start">
                <div>
                  <p>{t("unitPrice")}: SAR {unitPrice}</p>
                  <p>{t("tooling")}: SAR {toolingSetup}</p>
                  <p>{t("leadTime")}: {estLeadTime}</p>
                </div>
                <div className="text-xl font-bold text-[#2D5016]">SAR {totalPrice}</div>
              </div>
              <button className="mt-4 w-full bg-[#2D5016] text-white py-2 rounded-lg">{t("confirmQuote")}</button>
            </div>
          </div>
          <div
            className={`lg:col-span-3 col-span-12 w-full h-72 overflow-y-auto no_scrollbar flex flex-col items-start gap-4 border border-gray-200 rounded-lg p-4 shadow-lg
  ${showChat ? "hidden lg:flex" : "flex"}`}
          >
            <h2 className="font-semibold text-lg">{t("brandingLogo")}</h2>

            <div
              className="w-full h-48 border p-5 border-gray-200 flex items-center justify-center rounded-lg overflow-hidden"
              style={{ backgroundColor: color }}
            >
              {logoFile ? (
                <img
                  src={URL.createObjectURL(logoFile)}
                  alt={t("logoPreview")}
                  className="max-h-full object-contain"
                />
              ) : (
                <span className="text-sm text-gray-600">{t("logoPreview")}</span>
              )}
            </div>

            <input type="file" onChange={handleLogoUpload} className="w-full" />
          </div>


        </div>
      </Container>
    </>
  )
}

export default ProductDetailPage
