import formReducer from "./formSlice";
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        users: formReducer
    },
})
