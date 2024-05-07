import { createSlice } from "@reduxjs/toolkit";
import { specialOffers, topSellers, latestProducts } from "./act/actGetAllSale";

const initialState = {
    specialOffersData: [],
    specialOffersLoading: false,
    specialOffersErrors: null,

    topSellersData: [],
    topSellersLoading: false,
    topSellersErrors: null,

    latestProductsData: [],
    latestProductsLoading: false,
    latestProductsErrors: null,
};

const getAllSalesSlice = createSlice({
    name: "sales",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(specialOffers.pending, (state, action) => {
                state.specialOffersLoading = true;
                state.specialOffersErrors = null;
            })
            .addCase(specialOffers.fulfilled, (state, action) => {
                state.specialOffersLoading = false;
                state.specialOffersData = action.payload;
                state.specialOffersErrors = null;
            })
            .addCase(specialOffers.rejected, (state, action) => {
                state.specialOffersLoading = false;
                state.specialOffersErrors = action.error.message;
            })


            .addCase(topSellers.pending, (state, action) => {
                state.topSellersLoading = true;
                state.topSellersErrors = null;
            })
            .addCase(topSellers.fulfilled, (state, action) => {
                state.topSellersLoading = false;
                state.topSellersData = action.payload;
                state.topSellersErrors = null;
            })
            .addCase(topSellers.rejected, (state, action) => {
                state.topSellersLoading = false;
                state.topSellersErrors = action.error.message;
            })

            
            .addCase(latestProducts.pending, (state, action) => {
                state.latestProductsLoading = true;
                state.latestProductsErrors = null;
            })
            .addCase(latestProducts.fulfilled, (state, action) => {
                state.latestProductsLoading = false;
                state.latestProductsData = action.payload;
                state.latestProductsErrors = null;
            })
            .addCase(latestProducts.rejected, (state, action) => {
                state.latestProductsLoading = false;
                state.latestProductsErrors = action.error.message;
            });
    }
});

const getAllSalesSliceReducer = getAllSalesSlice.reducer;

export { getAllSalesSliceReducer, specialOffers, topSellers, latestProducts };
