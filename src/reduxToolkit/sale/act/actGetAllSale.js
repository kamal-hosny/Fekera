import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { axiosConfig } from "../../../services/axiosConfig";

const specialOffers = createAsyncThunk("special-Offers", async (  ) => {
    try{
        const { data } = await axiosConfig({
            url: "specialoffers"
        })
        return data
    } catch (error) {
        return error
    }
    
})
const topSellers = createAsyncThunk("top-Sellers", async (  ) => {
    try{
        const { data } = await axiosConfig({
            url: "topsellers"
        })
        return data
    } catch (error) {
        return error
    }
    
})
const latestProducts = createAsyncThunk("latest-Products", async (  ) => {
    try{
        const { data } = await axiosConfig({
            url: "lastestproducts"
        })
        return data
    } catch (error) {
        return error
    }
    
})

export { specialOffers, topSellers, latestProducts }