import type { AxiosResponse } from "axios"
import type { QueryParams } from "shared/lib"
import { APIInstance } from "shared/lib/api"
import type { TPosts } from "./models"

export const getPosts = async (params?: QueryParams) =>
    APIInstance.get<any, AxiosResponse<TPosts[]>>("/posts", { params })
export const getPost = async (id: number, params?: QueryParams) =>
    APIInstance.get<any, AxiosResponse<TPosts>>("/posts/" + id, { params })
export const getPostComments = async (id: number, params?: QueryParams) =>
    APIInstance.get<any, AxiosResponse<TPosts[]>>(`/posts/${id}/comments`, { params })

export const getUserPosts = async (id: number) => APIInstance.get<number, AxiosResponse<TPosts[]>>(`/users/${id}/posts`)
