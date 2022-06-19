import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

export const showAlert = createAction<string>("alerts/show")
export const hideAlert = createAction("alerts/hide")
