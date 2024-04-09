import { configureStore } from "@reduxjs/toolkit";
import darkMode from "../Slices/darkModeSlice";
import mobileSize from "../Slices/mobileSizeSlices";
import menuSlice from "../Slices/menuSlice"


export const store = configureStore({
    reducer: {
        darkMode: darkMode,
        mobileSize: mobileSize,
        menuSlice: menuSlice
    }
})