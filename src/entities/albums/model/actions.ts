import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "app/providers"
import { API, QueryParams } from "shared/lib"

const getAlbums = createAction("albums/getAlbums")
const getAlbum = createAction("albums/getAlbum")

export const fetchAlbums = createAsyncThunk(getAlbums.type, async (thunkAPI) => {
    const response = await API.getAlbums()
    return response.data
})

export const fetchAlbum = createAsyncThunk(
    getAlbum.type,
    async (params: { id: number } & QueryParams, { getState }) => {
        const { id, _page } = params
        //@ts-ignore
        const { limit } = getState().album

        const album = await API.getAlbum(id)
        const photos = await API.getAlbumPhotos(id, { _limit: limit, _page })

        const total = photos.headers["x-total-count"]

        return { ...album.data, photos: photos.data, total }
    }
)
