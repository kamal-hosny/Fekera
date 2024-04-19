import React from 'react'; // React library
import { useSelector, useDispatch } from 'react-redux'; // Redux library
import Cookies from 'js-cookie'; // js-cookie library

// Custom components
import Logo from './Logo'; // Custom component
import MegaMenu from './MegaMenu'; // Custom component
import MegaMenu2 from './MegaMenu2'; // Custom component
import DarkMode from './DarkMode'; // Custom component
import Language from '../topHeader/Language'; // Custom component

import { setMenu } from '../../Slices/menuSlice'; // Custom Redux Slice
import { useTranslation } from 'react-i18next';

import myLinks from "../../data/links.json";

const Nav2 = () => {
  const { t } = useTranslation(); 

  const dispatch = useDispatch()
  const toggleMenu = () => {
    dispatch(setMenu())
}

  const menuValue = useSelector((state) => {
    return state.menuSlice.result
  })
  
  const lng = Cookies.get("i18next") || "en"
  

  return (
    <>
    <div className={`fixed flex flex-col gap-8 z-[50] px-3 py-3 top-0 overflow-auto ${lng === 'en' ? (menuValue ? 'left-0 w-[60%]' : 'left-[-100%]') : (menuValue ? 'right-0 w-[60%]' : 'right-[-100%]')} h-full border-r shadow bg-mainColorBackground transition-all ease-in-out duration-300`}>
      <span onClick={()=>{toggleMenu()}}>
      <Logo />
      </span>
      <ul>
        {
          myLinks.map((link)=> {
            return(
              <MegaMenu key={link.id} myLinks={link} />
            )
          })
        }
      </ul>
      <div>
        <p className='text-colorText2 text-xs mb-2'>{t("Settings")}</p>
        <div className='flex gap-3 items-center'>
          
          <DarkMode />
          <span onClick={()=>{toggleMenu()}}>
          <Language />
          </span>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Nav2