import "./header.css"; // CSS file

// Custom component
import Logo from './Logo'; 
import Menu from "./Menu";
import HeaderIcons from './HeaderIcons'; 
import { Nav } from './Nav';


const Header = () => {
  return (
    <header className="  bg-mainColorBackground shadow">
    <div className='container size-full mx-auto flex justify-between md:justify-evenly items-center px-1  '>
      <Logo />
      <Nav />
      <HeaderIcons />
    </div>
    </header>
  )
}

export default Header