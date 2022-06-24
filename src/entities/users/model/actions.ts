import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchUserAlbums } from "entities/albums/model/actions"
import { fetchUserPosts } from "entities/posts/model/actions"
import { EAlertTypes } from "widgets/alert/lib"
import { showAlertFx } from "widgets/alert/model/actions"
import { API } from "../lib"

const getUser = createAction("users/getUser")

export const fetchUser = createAsyncThunk(getUser.type, async (id: number, { getState, dispatch, requestId }) => {
    try {
        const response = await API.getUser(id)

        dispatch(fetchUserAlbums(id))
        dispatch(fetchUserPosts(id))

        dispatch(showAlertFx({ message: `пользователь с ${response.data.email} загружен`, type: EAlertTypes.SUCCESS }))

        return { user: response.data, requestId }
    } catch (error) {
        dispatch(showAlertFx({ message: "ошибка загрузки пользователя", type: EAlertTypes.ERROR }))
    }
})
