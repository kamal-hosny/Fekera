import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // MUI Icon
import Cookies from 'js-cookie'; // js-cookie library
import { useState } from 'react'; // React library with useState hook
import { useTranslation } from "react-i18next"; // react-i18next library
import { useDispatch, useSelector } from 'react-redux'; // Redux library
import { Link } from 'react-router-dom'; // React Router library
import { setMenu } from '../../../hook/menuSlice'; // Redux Slice


const MegaMenu = ({ myLinks }) => {

  
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [arrow, setArrow] = useState(false); // State to track arrow rotation
  const lng = Cookies.get("i18next") || "en"

  const mobileSize = useSelector(state => state.mobileSize.result);

  const toggleMenu = () => {
    dispatch(setMenu())
}

const megaClick = ()=> {
  if(arrow === true){
    setArrow(false)
  }else{
    setArrow(true)
  }
}

  return (
    <div className={`nav-arrow relative cursor-pointer flex py-3 ${mobileSize === true && ( myLinks.links !== null && (" flex flex-row-reverse justify-between ")) } `} onMouseEnter={() => { setArrow(true) }} onClick={megaClick} onMouseLeave={() => { setArrow(false) }} >
      {myLinks.links !== null && (
        <KeyboardArrowDownIcon className={` ${arrow ? "rotate-180 text-hoverColorText  " : ""}`} />
      )}

      {myLinks.links === null ? (
        <Link to={myLinks.name} className={arrow ? "text-hoverColorText " : ""} onClick={mobileSize && (()=>{toggleMenu()})}>
          {t(myLinks.name)}
        </Link>
      ) : (
        <div>
          <span className={arrow ? "text-hoverColorText transition" : ""}>{t(myLinks.name)}</span>
          {arrow && (
            <ul className={mobileSize === true ? (`relative ${lng === "en" ? " mobileSizeRtl " : "mobileSizeLtr"}`) : ('absolute z-[5] top-12 right-1 bg-mainColorBackground ps-10 rounded-md w-max py-2 shadow')}>
              {myLinks.links.map((x, index) => (
                <Link to={x} key={index} className='flex items-center justify-end gap-3 pe-2 py-1  hover:text-hoverColorText' onClick={mobileSize && (()=>{toggleMenu()})}>
                  <li className={'hover:-translate-x-3 p-2 transition'}>
                    {t(x)}
                  </li>|
                </Link>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default MegaMenu;
