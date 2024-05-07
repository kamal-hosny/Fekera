import { configureStore } from "@reduxjs/toolkit";

import darkMode from "../reduxToolkit/darkModeSlice";
import menuSlice from "../reduxToolkit/menuSlice";
import mobileSize from "../reduxToolkit/mobileSizeSlices";

import { getAllSalesSliceReducer } from "../reduxToolkit/sale/saleSlice";

export const store = configureStore({
    reducer: {
        darkMode: darkMode,
        mobileSize: mobileSize,
        menuSlice: menuSlice,
        sales: getAllSalesSliceReducer,
    }
})