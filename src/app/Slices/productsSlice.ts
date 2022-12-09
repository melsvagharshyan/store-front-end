import {productsStateType} from "../Types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk(
    "get-products",
    async (category: string) => {
        const {data} = await axios.get(`/api/products/${category}`);
        return data;
    }
)

export const filter = createAsyncThunk<any,{brand:string, gender:string, price:{start:number, until:number}, category: string}>(
    "filter",
     async ({brand, gender, price, category})=>{
         const {data} = await axios.post(`/api/filtered`,{brand,gender,price,category});
         return data;
     }
)


const initialState: productsStateType = {
    products: []
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(filter.fulfilled, (state, action)=>{
                state.products = action.payload;
            })
    }
})


export default productsSlice.reducer;