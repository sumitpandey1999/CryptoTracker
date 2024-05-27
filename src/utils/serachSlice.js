import { createSlice } from "@reduxjs/toolkit";

const searchSlie = createSlice({
    name: "search",
    initialState:{
        items:[]
    },
    reducers:{
        addSearch: (state, action)=>{
            state.items = action.payload;
        }
    }
})

export const {addSearch} = searchSlie.actions
export default searchSlie.reducer;
