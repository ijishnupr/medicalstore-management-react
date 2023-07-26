import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./tocSlice";
import listReducer from "./listSlice";
import searchReducer from "./searchSlice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        list: listReducer,
        search: searchReducer,

    }
});
export default store;