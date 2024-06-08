import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    result: false
}

export const openSearch = createSlice({
    name: "openSearch",
    initialState: initialState, 
    reducers: {
        setOpenSearch: (currentState, action) => {
            currentState.result = !currentState.result
        }
    }
})

export const { setOpenSearch } = openSearch.actions

export default openSearch.reducer