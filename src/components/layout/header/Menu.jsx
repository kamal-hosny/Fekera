import { useDispatch, useSelector } from 'react-redux'; // Redux library
import { setMenu } from '../../../hook/menuSlice'; // Redux Slice


const Menu = () => {
    const dispatch = useDispatch()
    const menuValue = useSelector((state)=>{
        return state.menuSlice.result
    })
    
    const toggleMenu = () => {
        dispatch(setMenu())
    }

    return (
        <div className='menu md:hidden'>
            <label className="burger" htmlFor="burger">
                <input type="checkbox" checked={menuValue} id="burger" onChange={toggleMenu} />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    );
}

export default Menu;
