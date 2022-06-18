import { configureStore } from "@reduxjs/toolkit"

import { AlertModel } from "widgets/alert"
import { DishModel } from "entities/dishes"
import { OrderModel } from "features/order"
import { CategoryModel } from "entities/categories"

export const store = configureStore({
    reducer: {
        [DishModel.stores.DishSlice.name]: DishModel.stores.DishSlice.reducer,
        [OrderModel.stores.OrderSlice.name]: OrderModel.stores.OrderSlice.reducer,
        [AlertModel.stores.AlbumSlice.name]: AlertModel.stores.AlbumSlice.reducer,
        [CategoryModel.stores.CategorySlice.name]: CategoryModel.stores.CategorySlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
