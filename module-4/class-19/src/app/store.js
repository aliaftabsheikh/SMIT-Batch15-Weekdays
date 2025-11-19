import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../feature/todoSlice.js"
import { productApi } from "../services/products.js"
export const store = configureStore({
    reducer: {
        todos: todoReducer,
        [productApi.reducerPath]: productApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})