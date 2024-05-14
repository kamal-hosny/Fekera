import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom'




const HeadSign = () => {
  const { t } = useTranslation()
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState({
    login : location.pathname === "/login",
    register : location.pathname === "/register"
  })
  


  return (
    <div className="head flex justify-between border-b-2 border-borderColor  text-center relative">
              <Link
                className={`flex-1 cursor-pointer font-medium text-colorText2 py-5 ${currentPage.register && "border-b-2 border-sky-500"}`}
                to={"/register"}
              >
                {t("JOIN")}
              </Link>
              <span
                className="bg-borderColor w-[2px] h-3/4 block absolute top-1/2 translate-y-[-50%]"
                style={{ left: "calc(50% - 0.5px)", transform: "" }}
              ></span>
              <Link
                className={`flex-1 cursor-pointer font-medium   py-5 ${currentPage.login && "border-b-2 border-sky-500"}`}
                to={"/login"}
              >
                {t("SIGN IN")}
              </Link>
            </div>
  )
}

export default HeadSign