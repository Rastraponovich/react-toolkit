import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { TAlertType } from "../lib"

export const showAlert = createAction<{ message: string; id: string; type?: TAlertType }>("alerts/show")
export const hideAlert = createAction<string>("alerts/hide")

export const showAlertFx = createAsyncThunk(
    "alerts/showFx",
    async (payload: { message: string; type?: TAlertType }, { getState, dispatch, requestId }) => {
        dispatch(showAlert({ ...payload, id: requestId }))
    }
)
