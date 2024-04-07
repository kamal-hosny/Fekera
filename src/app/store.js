import { configureStore } from "@reduxjs/toolkit";
import darkMode from "../darkMode/darkModeSlice";



export const store = configureStore({
    reducer: {
        darkMode: darkMode,
    }
})