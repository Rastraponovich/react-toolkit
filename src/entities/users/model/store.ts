import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TAlbum } from "entities/albums/lib"
import { TUser } from "../lib/models"
import { fetchUser } from "./actions"

type TnitialState = {
    user: TUser
    pending: boolean
    loading: boolean
    requestId: string | undefined
    albums: TAlbum[]
}

const initialState: TnitialState = {
    user: { name: "" } as TUser,
    pending: false,
    loading: false,
    requestId: undefined,
    albums: [],
}

export const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<any>) => {
            state.user = action.payload.user
            state.requestId = undefined
            state.loading = false
            state.pending = false
            state.albums = action.payload.albums
        })
        builder.addCase(fetchUser.pending, (state, action) => {
            state.user = {} as TUser
            state.requestId = action.meta.requestId
            state.albums = []
            state.loading = true
            state.pending = true
        })
    },
})
