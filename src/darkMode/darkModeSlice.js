import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: localStorage.getItem("currentDarkMode") ?? "light"
};

export const darkMode = createSlice({
    name: "darkMode",
    initialState: initialState,
    reducers: {
        setTheme: (currentState, action) => {
            const theme = action.payload;
            currentState.result = theme; 
        }
    }
});

export const { setTheme } = darkMode.actions; 

export default darkMode.reducer;
