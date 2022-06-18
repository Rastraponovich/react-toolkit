import { createSlice } from "@reduxjs/toolkit"
import { DetailedAlbum, TAlbum, TPhoto } from "../lib"
import { fetchAlbum, fetchAlbums } from "./actions"

type TnitialState = {
    albums: TAlbum[]
    loading: boolean
    currentAlbum: DetailedAlbum
    page: number
    limit: number
}

const initialState: TnitialState = {
    albums: [],
    loading: false,
    currentAlbum: { photos: [] as TPhoto[], total: 0 } as DetailedAlbum,
    page: 0,
    limit: 10,
}

export const AlbumSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.albums = action.payload
            state.loading = false
        })
        builder.addCase(fetchAlbums.pending, (state, action) => {
            state.albums = []
            state.loading = true
        })
        builder.addCase(fetchAlbum.fulfilled, (state, action) => {
            state.loading = false
            state.currentAlbum = action.payload
        })
        builder.addCase(fetchAlbum.pending, (state, action) => {
            state.loading = true
        })
    },
})
