import type { AxiosResponse } from "axios"
import { TPosts } from "entities/posts/lib"
import { APIInstance } from "shared/lib/api"
import type { TUser } from "./models"

export const getUser = async (id: number) => APIInstance.get<number, AxiosResponse<TUser>>(`/users/${id}`)
export const getAllPostsByUser = async (id: number) =>
    APIInstance.get<number, AxiosResponse<TPosts>>("/posts?userId=" + id)
