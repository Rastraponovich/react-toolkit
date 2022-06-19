import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

export const showAlert = createAction<{ message: string; id: string }>("alerts/show")
export const hideAlert = createAction<string>("alerts/hide")

export const showAlertFx = createAsyncThunk(
    "alerts/showFx",
    async (message: string, { getState, dispatch, requestId }) => {
        dispatch(showAlert({ message, id: requestId }))
    }
)
