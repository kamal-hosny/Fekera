import "./header.css"; // CSS file

// Custom component
import Logo from './Logo'; 
import Menu from "./Menu";
import HeaderIcons from './HeaderIcons'; 
import { Nav } from './Nav';


const Header = () => {
  return (
    <div className="  bg-mainColorBackground shadow">
    <div className='container size-full mx-auto flex justify-between md:justify-evenly items-center px-1  '>
      <Logo />
      <Nav />
      <HeaderIcons />
    </div>
    </div>
  )
}

export default Header