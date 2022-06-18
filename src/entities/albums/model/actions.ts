import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { API } from "shared/lib"

const getAlbums = createAction("albums/getAlbums")
const getAlbum = createAction("albums/getAlbum")

export const fetchAlbums = createAsyncThunk(getAlbums.type, async (thunkAPI) => {
    const response = await API.getAlbums()
    return response.data
})

export const fetchAlbum = createAsyncThunk(getAlbum.type, async (id: number, thunkAPI) => {
    const album = await API.getAlbum(id)
    const photos = await API.getAlbumPhotos(id)

    return { ...album.data, photos: photos.data }
})
