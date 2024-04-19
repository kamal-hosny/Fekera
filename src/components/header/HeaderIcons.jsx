import React from "react"; // React library
import { Link } from "react-router-dom"; // React Router library
import PersonIcon from "@mui/icons-material/Person"; // MUI Icon
// Custom components
import DarkMode from "./DarkMode";
import CartButton from "./CartButton";
import Search from "./Search";

const HeaderIcons = () => {
  return (
    <div className="flex gap-4">
      <Search />
      <Link to="Register" className="flex cursor-pointer">
        <PersonIcon />
      </Link>
      <DarkMode />
      <button className="relative">
        <CartButton />
        
        <span className="absolute -top-1.5 -right-1.5 text-slate-50 bg-red-600 h-4 w-4 rounded-full text-xs">1</span>
      </button>
    </div>
  );
};

export default HeaderIcons;
