import React, { useEffect } from 'react'; // React library

// locale
import i18n from "i18next"; // i18next library
import { useTranslation, initReactI18next } from "react-i18next"; // react-i18next library
import LanguageDetector from "i18next-browser-languagedetector"; // LanguageDetector from i18next library
import HttpApi from 'i18next-http-backend'; // HttpApi from i18next library
import Cookies from 'js-cookie'; // js-cookie library
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../reduxToolkit/languageNowSlice';


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
    const dispatch = useDispatch();
    const lng = Cookies.get("i18next") || "en"
    useEffect(() => {
        dispatch(setLanguage(lng))
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