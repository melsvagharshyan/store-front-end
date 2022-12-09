import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    items: [{choice:["Armani","Gucci"]},{choice:["male","female"]}]
}


const filterReducer = createSlice({
    name: "filter-reducer",
    initialState,
    reducers: {}
})

export default filterReducer.reducer;