import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "app/providers"
import { AxiosError } from "axios"
import { API, QueryParams } from "shared/lib"
import { EAlertTypes } from "widgets/alert/lib"
import { showAlertFx } from "widgets/alert/model/actions"

const getAlbums = createAction("albums/getAlbums")
const getAlbum = createAction("albums/getAlbum")

export const fetchAlbums = createAsyncThunk(getAlbums.type, async (_, thunkAPI) => {
    try {
        const response = await API.getAlbums({ _limit: 10, _page: 1 })
        const { dispatch, requestId, getState } = thunkAPI

        dispatch(showAlertFx({ message: `загруженно ${response.data.length}`, type: EAlertTypes.SUCCESS }))

        const total = response.headers["x-total-count"]

        return { items: response.data, totalCount: Number(total), requestId }
    } catch (error) {
        thunkAPI.dispatch(showAlertFx({ message: String(error), type: EAlertTypes.ERROR }))
    }
})

export const fetchAlbum = createAsyncThunk(
    getAlbum.type,
    async (params: { id: number } & QueryParams, { getState, dispatch }) => {
        const { id, _page } = params
        //@ts-ignore
        const { limit } = getState().album

        const album = await API.getAlbum(id)
        const photos = await API.getAlbumPhotos(id, { _limit: limit, _page })

        dispatch(showAlertFx({ message: `загруженно ${photos.data.length}` }))

        const total = photos.headers["x-total-count"]

        return { ...album.data, photos: photos.data, total }
    }
)
