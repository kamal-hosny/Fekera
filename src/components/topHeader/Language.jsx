import React, { useEffect } from 'react'


// locale
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
import Cookies from 'js-cookie';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: "en",
        detection: {
            order: [
                "cookie",
                "querystring",
                "localStorage",
                "sessionStorage",
                "navigator",
                "htmlTag",
                "path",
                "subdomain",
            ],
            caches: ["cookie"],
        },
        backend: {
            loadPath: '/locale/{{lng}}/{{ns}}.json',
        },
    });

const Language = () => {
    const { t } = useTranslation()

    const lng = Cookies.get("i18next") || "en"

    useEffect(() => {
        window.document.dir = i18n.dir()
    }, [lng])

    return (
        <>
            {lng === "en" ? 
            (<div className="p-2 cursor-pointer" onClick={() => { i18n.changeLanguage("ar") }}>عربى</div>):
            (<div className="p-2 cursor-pointer" onClick={() => { i18n.changeLanguage("en") }}>English</div>)
        }
            
        </>
    )
}

export default Language