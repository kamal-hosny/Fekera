import React from 'react'

// ICONS
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import DarkMode from './DarkMode';
const HeaderIcons = () => {
  return (
    <div className='flex gap-4'>
      <span className='flex cursor-pointer'> sign in <PersonIcon /></span>
      <DarkMode />
      <ShoppingCartIcon />
    </div>
    
  )
}

export default HeaderIcons