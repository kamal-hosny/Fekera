import { setMenu } from '../../Slices/menuSlice';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


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
