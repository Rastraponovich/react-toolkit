import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { DetailedAlbum, TAlbum, TPhoto } from "../lib"
import { fetchAlbum, fetchAlbums } from "./actions"

type TnitialState = {
    albums: TAlbum[]
    loading: boolean
    currentAlbum: DetailedAlbum
    page: number
    limit: number
    totalCount: number
    requestId: string | undefined
}

const initialState: TnitialState = {
    albums: [],
    loading: false,
    currentAlbum: { photos: [] as TPhoto[], total: 0 } as DetailedAlbum,
    page: 0,
    limit: 10,
    totalCount: 0,
    requestId: undefined,
}

export const AlbumSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.fulfilled, (state, action: PayloadAction<any>) => {
            state.albums = action.payload.items
            state.totalCount = action.payload.totalCount
            state.requestId = undefined
            state.loading = false
        })
        builder.addCase(fetchAlbums.pending, (state, action) => {
            state.albums = []
            state.requestId = action.meta.requestId
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
