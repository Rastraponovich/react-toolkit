import { configureStore } from "@reduxjs/toolkit"
import { AlbumModel } from "entities/albums"
import { PostsModel } from "entities/posts"
import { UserModel } from "entities/users"
import { AlertModel } from "widgets/alert"
// ...

export const store = configureStore({
    reducer: {
        [PostsModel.stores.PostsSlice.name]: PostsModel.stores.PostsSlice.reducer,
        album: AlbumModel.stores.AlbumSlice.reducer,
        [AlertModel.stores.AlbumSlice.name]: AlertModel.stores.AlbumSlice.reducer,
        [UserModel.stores.UsersSlice.name]: UserModel.stores.UsersSlice.reducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
