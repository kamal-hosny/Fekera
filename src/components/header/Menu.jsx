import { useDispatch, useSelector } from 'react-redux'; // Redux library
import { setMenu } from '../../reduxToolkit/menuSlice'; // Redux Slice
import { Helmet } from 'react-helmet-async';


const Menu = () => {
    const dispatch = useDispatch()
    const menuValue = useSelector((state)=>{
        return state.menuSlice.result
    })
    
    const toggleMenu = () => {
        dispatch(setMenu())
    }
    return (
        <>
      <Helmet>
        <style type="text/css">{`
            body {
                overflow-y: ${menuValue === true ? "hidden" : "auto"} !important;
            }        
        `}
        </style >
      </Helmet>
        <div className='menu md:hidden'>
            <label className="burger" htmlFor="burger">
                <input type="checkbox" checked={menuValue} id="burger" onChange={toggleMenu} />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
        </>
    );
}

export default Menu;
