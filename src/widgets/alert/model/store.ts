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

type TnitialState = {
    opened: boolean
    message: string
    type: TAlertType
}

const initialState: TnitialState = {
    opened: false,
    message: "",
    type: EAlertTypes.INFO,
}

export const AlbumSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(showAlert, (state, action) => {
            state.opened = true
            state.message = action.payload
        })
        builder.addCase(hideAlert, (state, payload) => {
            state.opened = false
        })
    },
})
