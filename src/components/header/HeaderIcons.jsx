import React from 'react'


import PersonIcon from '@mui/icons-material/Person';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import Search from './Search';

const HeaderIcons = () => {
  return (
    <div className='flex gap-4'>
      <Search />
      <Link to="Register" className='flex cursor-pointer'><PersonIcon /></Link>
      <DarkMode />
      <CartButton />
    </div>
    
  )
}

export default HeaderIcons