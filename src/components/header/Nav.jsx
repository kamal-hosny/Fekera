import { Link } from 'react-router-dom'; // React Router library
import MegaMenu from './MegaMenu'; // Custom component

import myLinks from "../../data/links.json";



export const Nav = () => {
  return (
    <div className='font-Readex text-mainTextColor'>
      <ul className=' items-center gap-5 hidden md:flex'>
        {
          myLinks.map((link)=> {
            return(
              <MegaMenu key={link.id} myLinks={link} />
            )
          })
        }
      </ul>
    </div>
  )
}
