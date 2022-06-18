import axios, { AxiosResponse } from "axios"
import { DetailedAlbum, TAlbum, TPhoto } from "entities/albums/lib"

const API_URL = "https://jsonplaceholder.typicode.com/"

const APIInstance = axios.create({ baseURL: API_URL, headers: { "Content-Type": "application/json" } })

export const getAlbums = async () => APIInstance.get<any, AxiosResponse<TAlbum[]>>("/albums")
export const getAlbum = async (id: number) => APIInstance.get<any, AxiosResponse<TAlbum>>("/albums/" + id)
export const getAlbumPhotos = async (id: number) =>
    APIInstance.get<any, AxiosResponse<TPhoto[]>>(`/albums/${id}/photos`)
