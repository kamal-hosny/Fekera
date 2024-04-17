import React from 'react'; // React library
import { Link } from 'react-router-dom'; // React Router library
import PersonIcon from '@mui/icons-material/Person'; // MUI Icon
// Custom components
import DarkMode from './DarkMode'; 
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