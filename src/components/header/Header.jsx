import "./header.css"; // CSS file

// Custom component
import Logo from './Logo'; 
import Menu from "./Menu";
import HeaderIcons from './HeaderIcons'; 
import { Nav } from './Nav';
import Headroom from "react-headroom";


const Header = () => {
  return (
    <Headroom style={{zIndex: "50"}}>
      <div className="  bg-mainColorBackground shadow h-[90] flex flex-col items-center">
    <div className='container size-full mx-auto flex justify-between md:justify-evenly items-center px-1  '>
      <Logo />
      <Nav />
      <HeaderIcons />
    </div>
    </div>
    </Headroom>
  )
}

export default Header