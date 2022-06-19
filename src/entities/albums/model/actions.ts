import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "app/providers"
import { API, QueryParams } from "shared/lib"
import { hideAlert, showAlert } from "widgets/alert/model/actions"

const getAlbums = createAction("albums/getAlbums")
const getAlbum = createAction("albums/getAlbum")

export const fetchAlbums = createAsyncThunk(getAlbums.type, async (thunkAPI) => {
    const response = await API.getAlbums()
    return response.data
})

export const fetchAlbum = createAsyncThunk(
    getAlbum.type,
    async (params: { id: number } & QueryParams, { getState, dispatch }) => {
        const { id, _page } = params
        //@ts-ignore
        const { limit } = getState().album

        const album = await API.getAlbum(id)
        const photos = await API.getAlbumPhotos(id, { _limit: limit, _page })

        dispatch(showAlert(`загруженно ${photos.data.length}`))

        const total = photos.headers["x-total-count"]

        const timer = setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)

        return { ...album.data, photos: photos.data, total }
    }
)
