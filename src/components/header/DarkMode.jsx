// import React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../darkMode/darkModeSlice';
//  import Icons MUI
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const DarkMode = () => {
    const resultState = useSelector((state) => {
        return state.darkMode.result;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        if (resultState === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        }
    }, [resultState]);

    return (
        <div className='cursor-pointer' onClick={() => {
            // Set value on localStorage
            localStorage.setItem("currentDarkMode", resultState === "dark" ? "light" : "dark");
            // Get value from localStorage
            dispatch(setTheme(localStorage.getItem("currentDarkMode")));
        }}>
            {resultState === "dark" ? <WbSunnyOutlinedIcon/> : <DarkModeOutlinedIcon/>}
        </div>
    );
};

export default DarkMode;