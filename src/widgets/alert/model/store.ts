import { createSlice } from "@reduxjs/toolkit"
import { hideAlert, showAlert } from "./actions"
import { TAlertType, TMessage, EAlertTypes } from "../lib"

type TInitialState = {
    opened: boolean
    message: string
    type: TAlertType
    messages: TMessage[]
}

const initialState: TInitialState = {
    opened: false,
    message: "",
    type: EAlertTypes.INFO,
    messages: [],
}

export const AlbumSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(showAlert, (state, action) => {
            state.opened = true
            state.messages.push({
                message: action.payload.message,
                type: action.payload.type || EAlertTypes.INFO,
                id: action.payload.id,
            })
        })
        builder.addCase(hideAlert, (state, action) => {
            state.opened = false
            state.messages.splice(
                state.messages.findIndex((i) => i.id === action.payload),
                1
            )
        })
    },
})
