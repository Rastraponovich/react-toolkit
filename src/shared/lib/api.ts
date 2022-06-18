import axios, { AxiosResponse } from "axios"
import { DetailedAlbum, TAlbum, TPhoto } from "entities/albums/lib"
import { QueryParams } from "./model"

const API_URL = "https://jsonplaceholder.typicode.com/"

const APIInstance = axios.create({ baseURL: API_URL, headers: { "Content-Type": "application/json" } })

export const getAlbums = async (params?: QueryParams) =>
    APIInstance.get<any, AxiosResponse<TAlbum[]>>("/albums", { params })
export const getAlbum = async (id: number, params?: QueryParams) =>
    APIInstance.get<any, AxiosResponse<TAlbum>>("/albums/" + id, { params })
export const getAlbumPhotos = async (id: number, params?: QueryParams) =>
    APIInstance.get<any, AxiosResponse<TPhoto[]>>(`/albums/${id}/photos`, { params })
