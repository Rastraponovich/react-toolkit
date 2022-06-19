import { createSlice } from "@reduxjs/toolkit"
import { fetchAlbum } from "entities/albums/model/actions"
import { hideAlert, showAlert } from "./actions"

type TAlertType = EAlertTypes

enum EAlertTypes {
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    ERROR = "ERROR",
    INFO = "INFO",
    DEFAULT = "DEFAULT",
}
type TMessage = {
    message: string
    id: string
    type: TAlertType
}
type TnitialState = {
    opened: boolean
    message: string
    type: TAlertType
    messages: TMessage[]
}

const initialState: TnitialState = {
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
            state.messages.push({ message: action.payload.message, type: EAlertTypes.SUCCESS, id: action.payload.id })
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
