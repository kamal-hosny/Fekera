// CSS STYLE
import "./header.css"
// COMPONENTS
import HeaderIcons from './HeaderIcons'
import Logo from './Logo'
import { Nav } from './Nav'


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