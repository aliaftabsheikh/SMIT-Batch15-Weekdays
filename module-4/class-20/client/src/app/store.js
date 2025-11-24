import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../services/productApi'
import { setupListeners } from '@reduxjs/toolkit/query'



export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
    },  

     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})


setupListeners(store.dispatch)

