import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    result: false
}

export const showForm = createSlice({
    name: "showForm",
    initialState:initialState,
    reducers: {
        setShowForm: (currentState, action) => {
            currentState.result = !currentState.result
        }
    }
})

export const { setShowForm } = showForm.actions

export default showForm.reducer