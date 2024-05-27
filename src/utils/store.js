import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./serachSlice"

const appstore = configureStore({
    reducer:{
        search: searchReducer
    }
})

export default appstore;