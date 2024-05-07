import React from "react"; // React library
import Language from "./Language"; // Custom Language component
import PhoneIcon from "@mui/icons-material/Phone"; // MUI PhoneIcon component
import { Link } from "react-router-dom"; // React Router library

// locale
import { useTranslation, initReactI18next } from "react-i18next"; // react-i18next library


const HeadHeader = () => {
  const { t } = useTranslation();

  return (
    <div className=" bg-mainColor text-xs">
      <div className="container mx-auto hidden md:flex justify-between md:justify-around items-center gap-x-[28rem]">
        <Language />
        <div className="flex items-center gap-4">
          <span className="cursor-pointer p-2"> {t("Sell on Fekera")} </span>
          <span className="flex items-center p-2 ">
            <PhoneIcon fontSize="20px" className="mt-1" />
            <span>{t("Call")} 123456</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeadHeader;
