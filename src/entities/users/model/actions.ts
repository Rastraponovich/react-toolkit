import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { API } from "shared/lib"
import { EAlertTypes } from "widgets/alert/lib"
import { showAlertFx } from "widgets/alert/model/actions"

const getUser = createAction("users/getUser")

export const fetchUser = createAsyncThunk(getUser.type, async (id: number, { getState, dispatch, requestId }) => {
    try {
        const response = await API.getUser(id)

        const albums = await API.getUserAlbums(id)

        dispatch(showAlertFx({ message: `загруженно ${response.data.email}`, type: EAlertTypes.SUCCESS }))

        return { user: response.data, requestId, albums: albums.data }
    } catch (error) {
        dispatch(showAlertFx({ message: String(error), type: EAlertTypes.ERROR }))
    }
})
