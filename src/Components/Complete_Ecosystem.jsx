"use client"
import Container from '@/src/Components/Container'
import { useLanguage } from '@/src/Context/LanguageContext'
import {
  BsBox,
  BsCashStack,
  BsReceipt,
  BsPeople,
  BsBarChartLine,
  BsGear
} from "react-icons/bs";

const Complete_Ecosystem = () => {
  const { t } = useLanguage();

  const BusinessDataSystem = [
    {
      id: 1,
      name: t("advanced_mrp"),
      icon: <BsBox />,
      desc: t("advanced_mrp_desc")
    },
    {
      id: 2,
      name: t("financial_suite"),
      icon: <BsCashStack />,
      desc: t("financial_suite_desc")
    },
    {
      id: 3,
      name: t("sales_invoicing"),
      icon: <BsReceipt />,
      desc: t("sales_invoicing_desc")
    },
    {
      id: 4,
      name: t("hr_payroll"),
      icon: <BsPeople />,
      desc: t("hr_payroll_desc")
    },
    {
      id: 5,
      name: t("business_intelligence"),
      icon: <BsBarChartLine />,
      desc: t("business_intelligence_desc")
    },
    {
      id: 6,
      name: t("process_automation"),
      icon: <BsGear />,
      desc: t("process_automation_desc")
    }
  ];

  return (
    <Container className='py-16'>
      <div data-aos="fade-up" className='flex w-full flex-col mt-5 items-center'>
        <h1 className='text-xl text-center max-[400px]:text-lg md:text-3xl text-[#2d5016] font-bold'>
          {t("complete_ecosystem_heading")}
        </h1>
        <p className='text-sm md:text-lg text-center text-gray-500'>
          {t("complete_ecosystem_desc")}
        </p>
      </div>

      <div
        data-aos="fade-up"
        className='w-full grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5 items-start mt-5'>
        {BusinessDataSystem.map((item) => (
          <div
            key={item.id}
            className='flex px-4 hover:shadow-xl duration-300 py-4 flex-col gap-4 items-start w-full rounded-md h-48 overflow-auto no_scrollbar bg-[#F9FAFB] border border-gray-100'
          >
            <span className='flex items-center justify-center sm:w-16 h-10 w-10 sm:h-16 rounded-sm bg-[#2d5016] text-white text-lg sm:text-2xl'>
              {item.icon}
            </span>
            <div className='flex flex-col gap-1 items-start'>
              <h1 className='text-xl text-[#2d5016] font-bold'>{item.name}</h1>
              <p className='text-sm text-gray-500'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Complete_Ecosystem;
