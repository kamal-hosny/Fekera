import { configureStore } from "@reduxjs/toolkit";

import darkMode from "../reduxToolkit/darkModeSlice";
import menuSlice from "../reduxToolkit/menuSlice";
import mobileSize from "../reduxToolkit/mobileSizeSlices";
import  setLanguage  from "../reduxToolkit/languageNowSlice";
import { getAllSalesSliceReducer } from "../reduxToolkit/sale/saleSlice";


export const store = configureStore({
    reducer: {
        darkMode: darkMode,
        mobileSize: mobileSize,
        menuSlice: menuSlice,
        languageSlice: setLanguage,
        sales: getAllSalesSliceReducer,
    }
})

