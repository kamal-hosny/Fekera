import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    result: undefined,
};

export const mobileSize = createSlice({
    name: "mobileSize",
    initialState: initialState,
    reducers: {
        setScreenSize: (current, action) => {
            current.result = action.payload;
        },
    },
});

export const { setScreenSize } = mobileSize.actions;

export const checkScreenSize = () => {
    return (dispatch) => {
        const handleResize = () => {
            dispatch(setScreenSize(window.innerWidth < 768))
        }
        window.addEventListener("resize", handleResize);
        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }
}

export default mobileSize.reducer
