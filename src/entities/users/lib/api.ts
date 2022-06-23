import type { AxiosResponse } from "axios"
import { APIInstance } from "shared/lib/api"
import type { TUser } from "./models"

export const getUser = async (id: number) => APIInstance.get<number, AxiosResponse<TUser>>(`/users/${id}`)
