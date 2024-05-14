import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: false
}

export const language = createSlice({
    name: "language",
    initialState: initialState, 
    reducers: {
        setLanguage: (currentState, action) => {
            currentState.result = action.payload === "en";
        }
    }
})

export const { setLanguage } = language.actions

export default language.reducer