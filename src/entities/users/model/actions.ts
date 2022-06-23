import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchUserAlbums } from "entities/albums/model/actions"
import { EAlertTypes } from "widgets/alert/lib"
import { showAlertFx } from "widgets/alert/model/actions"
import { API } from "../lib"

const getUser = createAction("users/getUser")

export const fetchUser = createAsyncThunk(getUser.type, async (id: number, { getState, dispatch, requestId }) => {
    try {
        const response = await API.getUser(id)

        dispatch(fetchUserAlbums(id))

        dispatch(showAlertFx({ message: `загруженно ${response.data.email}`, type: EAlertTypes.SUCCESS }))

        return { user: response.data, requestId }
    } catch (error) {
        dispatch(showAlertFx({ message: String(error), type: EAlertTypes.ERROR }))
    }
})
