import React from 'react'; // React library

// Custom component
import Logo from './Logo';
import Menu from './Menu';
import DarkMode from './DarkMode';
import Nav2 from './Nav2';
import CartButton from './CartButton';
import Search from './Search';
import Headroom from 'react-headroom';
import { Helmet } from 'react-helmet-async';


const HeaderMobile = () => {

  return (
    <>
      <Helmet>
        <style type="text/css">{`
          
        `}
        </style >
      </Helmet>

      <Headroom style={{ zIndex: "50" }}>
        <div className='bg-mainColorBackground shadow relative flex flex-col items-center'>
          <div className="container mx-auto px-4 flex items-center justify-between">
            <span className='flex items-center gap-5'>
              <CartButton />
              <Search />
            </span>
            <Logo />
            <span className='flex items-center gap-4'>
              <DarkMode />
              <Menu />
            </span>

          </div>


          
        </div>
      </Headroom>
      <Nav2 />
    </>

  )
}

export default HeaderMobile