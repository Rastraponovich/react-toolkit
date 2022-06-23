import type { AxiosResponse } from "axios"
import type { QueryParams } from "shared/lib"
import { APIInstance } from "shared/lib/api"
import type { TAlbum, TPhoto } from "./models"

export const getAlbums = async (params?: QueryParams) =>
    APIInstance.get<any, AxiosResponse<TAlbum[]>>("/albums", { params })
export const getAlbum = async (id: number, params?: QueryParams) =>
    APIInstance.get<any, AxiosResponse<TAlbum>>("/albums/" + id, { params })
export const getAlbumPhotos = async (id: number, params?: QueryParams) =>
    APIInstance.get<any, AxiosResponse<TPhoto[]>>(`/albums/${id}/photos`, { params })

export const getUserAlbums = async (id: number) => APIInstance.get<number, AxiosResponse<any>>(`/users/${id}/albums`)
