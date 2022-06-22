import { configureStore } from "@reduxjs/toolkit"

import { AlertModel } from "widgets/alert"
// ...

import { DishModel } from "entities/dishes"

import { CategoryModel } from "entities/categories"
import { OrderModel } from "features/order"

export const store = configureStore({
    reducer: {
        [CategoryModel.stores.CategorySlice.name]: CategoryModel.stores.CategorySlice.reducer,

        [DishModel.stores.DishSlice.name]: DishModel.stores.DishSlice.reducer,
        [OrderModel.stores.OrderSlice.name]: OrderModel.stores.OrderSlice.reducer,

        [AlertModel.stores.AlbumSlice.name]: AlertModel.stores.AlbumSlice.reducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
