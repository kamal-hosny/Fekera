import { configureStore } from "@reduxjs/toolkit";
import darkMode from "../hook/darkModeSlice";
import menuSlice from "../hook/menuSlice";
import mobileSize from "../hook/mobileSizeSlices";


export const store = configureStore({
    reducer: {
        darkMode: darkMode,
        mobileSize: mobileSize,
        menuSlice: menuSlice
    }
})