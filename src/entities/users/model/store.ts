import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TUser } from "../lib/models"
import { fetchUser } from "./actions"

type TInitialState = {
    user: TUser
    pending: boolean
    loading: boolean
    requestId: string | undefined
}

const initialState: TInitialState = {
    user: { name: "" } as TUser,
    pending: false,
    loading: false,
    requestId: undefined,
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
        })
        builder.addCase(fetchUser.pending, (state, action) => {
            state.user = {} as TUser
            state.requestId = action.meta.requestId
            state.loading = true
            state.pending = true
        })
    },
})
