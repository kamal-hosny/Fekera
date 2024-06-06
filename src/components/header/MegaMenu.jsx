import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // MUI Icon
import Cookies from 'js-cookie'; // js-cookie library
import { useState } from 'react'; // React library with useState hook
import { useTranslation } from "react-i18next"; // react-i18next library
import { useDispatch, useSelector } from 'react-redux'; // Redux library
import { NavLink } from 'react-router-dom'; // React Router library
import { setMenu } from '../../reduxToolkit/menuSlice'; // Redux Slice
import { Helmet } from 'react-helmet-async';


const MegaMenu = ({ myLinks }) => {

  
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [arrow, setArrow] = useState(false); // State to track arrow rotation
  const lng = Cookies.get("i18next") || "en"

  const mobileSize = useSelector(state => state.mobileSize.result);
  const language = useSelector(state => state.languageSlice.result);

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
    <>
    <Helmet>
        <style type="text/css">{`
        a.active{
          color: #60a5fa;
        }
            `}</style>
      </Helmet>
    <div className={`nav-arrow relative cursor-pointer flex py-3 ${mobileSize === true && ( myLinks.links !== null && (" flex flex-row-reverse justify-between ")) } `} onMouseEnter={() => { setArrow(true) }} onClick={megaClick} onMouseLeave={() => { setArrow(false) }} >
      {myLinks.links !== null && (
        <KeyboardArrowDownIcon className={` ${arrow ? "rotate-180 text-hoverColorText  " : ""}`} />
      )}

      {myLinks.links === null ? (
        <NavLink to={ myLinks.name.toLowerCase() === "sale" ? `${myLinks.name.toLowerCase()}` : `shop/${myLinks.name.toLowerCase()}` } className={arrow ? "text-hoverColorText " : ""} onClick={mobileSize && (()=>{toggleMenu()})}>
          {t(myLinks.name)}
        </NavLink>
      ) : (
        <div>
          <span className={arrow ? "text-hoverColorText transition" : ""}>{t(myLinks.name)}</span>
          {arrow && (
            <ul className={mobileSize === true ? (`relative ${lng === "en" ? " mobileSizeRtl " : "mobileSizeLtr"}`) : ('absolute z-[5] top-12 right-1 bg-mainColorBackground ps-10 rounded-md w-max py-2 shadow')}>
              {myLinks.links.map((x, index) => {
                  const text = `shop/${x}`;
                  const result = text.toLowerCase().replace(/[%&]/g, '-').replace(/[%20 ]/g, "");
                  return (
                    <NavLink to={`${result}`} key={index} className='flex items-center justify-end gap-3 pe-2 py-1  hover:text-hoverColorText' onClick={mobileSize && toggleMenu}>
                      <li className={`${language ? "hover:-translate-x-3" : "hover:translate-x-3"}  p-2 transition`}>
                        {t(x)}
                      </li>
                    </NavLink>
                  );
                })}
            </ul>
          )}
        </div>
      )}
    </div>
    </>
  );
}

export default MegaMenu;
