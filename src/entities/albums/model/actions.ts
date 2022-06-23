import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchUser } from "entities/users/model/actions"
import type { QueryParams } from "shared/lib"
import { EAlertTypes } from "widgets/alert/lib"
import { showAlertFx } from "widgets/alert/model/actions"
import { API } from "../lib"

const getAlbums = createAction("albums/getAlbums")
const getUserAlbums = createAction("albums/getUserAlbums")

const getAlbum = createAction("albums/getAlbum")

export const fetchAlbums = createAsyncThunk(
    getAlbums.type,
    async (params: QueryParams, { getState, dispatch, requestId }) => {
        try {
            const response = await API.getAlbums(params)

            dispatch(showAlertFx({ message: `загруженно ${response.data.length} альбомов`, type: EAlertTypes.SUCCESS }))

            const total = response.headers["x-total-count"]

            return { items: response.data, totalCount: Number(total), requestId }
        } catch (error) {
            dispatch(showAlertFx({ message: "произошла ошибка загрузки альбомов", type: EAlertTypes.ERROR }))
        }
    }
)

export const fetchAlbum = createAsyncThunk(
    getAlbum.type,
    async (params: { id: number } & QueryParams, { getState, dispatch }) => {
        const { id, _page } = params
        //@ts-ignore
        const { limit } = getState().album

        const album = await API.getAlbum(id)
        const photos = await API.getAlbumPhotos(id, { _limit: limit, _page })

        dispatch(showAlertFx({ message: `загруженно ${photos.data.length} фотографий к альбому с id ${id}` }))
        dispatch(fetchUser(album.data.userId))

        const total = photos.headers["x-total-count"]

        return { ...album.data, photos: photos.data, total }
    }
)

export const fetchUserAlbums = createAsyncThunk(
    getUserAlbums.type,
    async (id: number, { getState, dispatch, requestId }) => {
        try {
            const albums = await API.getUserAlbums(id)

            dispatch(
                showAlertFx({
                    message: `загруженно ${albums.data.length} альбомов пользователя с id ${id}`,
                    type: EAlertTypes.SUCCESS,
                })
            )

            const total = albums.headers["x-total-count"]

            return { items: albums.data, totalCount: Number(total), requestId }
        } catch (error) {
            dispatch(
                showAlertFx({ message: "произошла ошибка загрузки альбомов для пользователя", type: EAlertTypes.ERROR })
            )
        }
    }
)
