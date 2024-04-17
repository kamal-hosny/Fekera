import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import MegaMenu2 from './MegaMenu2';
import { setMenu } from '../../Slices/menuSlice';
import DarkMode from './DarkMode';
import Language from '../topHeader/Language';


const myLinks = [
  {
    id: 1,
    name: "Sale",
    links: null
  },
  {
    id: 2,
    name: "Clothing",
    links: ["T-shirts & Vests", "Hoodies & Sweatshirts", "Jeans", "Jumpers & Cardigans", "Shirts", "Trousers & Chinos", "Suits", "Cargo Trousers", "Co-Ords", "Designer Brands" ]
  },
  {
    id: 3,
    name: "Shoes",
    links: null
  },
  {
    id: 4,
    name: "Accessories",
    links: null
  },
  {
    id: 5,
    name: "Sportswear",
    links: null
  },
]

const Nav2 = () => {

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
    <div className={`fixed flex flex-col gap-8 z-[50] px-3 py-3 top-0 ${lng === 'en' ? (menuValue ? 'left-0 w-[60%]' : 'left-[-100%]') : (menuValue ? 'right-0 w-[60%]' : 'right-[-100%]')} h-full border-r shadow bg-mainColorBackground transition-all ease-in-out duration-300`}>
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
        <p className='text-colorText2 text-xs mb-2'>Settings</p>
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