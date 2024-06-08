import React from "react"; // React library
import { Link } from "react-router-dom"; // React Router library
import PersonIcon from "@mui/icons-material/Person"; // MUI Icon
// Custom components
import DarkMode from "./DarkMode";
import CartButton from "./CartButton";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import { setOpenSearch } from "../../reduxToolkit/showSearchSlice";

const HeaderIcons = () => {
  const dispatch = useDispatch()
  
  const toggleSearch = () => {
    dispatch(setOpenSearch())
  }

  return (
    <div className="flex gap-4">
        <div className='cursor-pointer' onClick={toggleSearch}>
        <SearchIcon />
        </div>
      <Link to="/login" className="flex cursor-pointer">
        <PersonIcon />
      </Link>
      <DarkMode />
      <div className="relative">
        <CartButton />
        
        <span className="absolute -top-1.5 -right-1.5 text-slate-50 bg-red-600 h-4 w-4 rounded-full text-xs flex items-center justify-center">1</span>
      </div>
    </div>
  );
};

export default HeaderIcons;
