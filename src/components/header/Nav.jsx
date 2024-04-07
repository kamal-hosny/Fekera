import { Link } from 'react-router-dom'
import MegaMenu from './MegaMenu'

const myLinks = [
  {
    id: 1,
    name: "Sale",
    links: null
  },
  {
    id: 2,
    name: "Clothing",
    links: ["T-shirts & Vests", "Hoodies & Sweatshirts", "Jeans", "Jumpers & Cardigans", "Shirts", "Trousers & Chinos", "Suits", "Cargo Trousers", "Co-Ords", "Designer Brands" ]
  },
  {
    id: 3,
    name: "Shoes",
    links: null
  },
  {
    id: 4,
    name: "Accessories",
    links: null
  },
  {
    id: 5,
    name: "Sportswear",
    links: null
  },
]

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
