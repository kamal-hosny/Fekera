import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: false
}

export const menu = createSlice({
    name: "menu",
    initialState: initialState, 
    reducers: {
        setMenu: (currentState, action) => {
            currentState.result = !currentState.result
        }
    }
})

export const { setMenu } = menu.actions

export default menu.reducer