import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchUser } from "entities/users/model/actions"
import type { QueryParams } from "shared/lib"
import { EAlertTypes } from "widgets/alert/lib"
import { showAlertFx } from "widgets/alert/model/actions"
import { API } from "../lib"

const getPosts = createAction("posts/getPosts")
const getPostsComments = createAction("posts/getPostComments")

const getPost = createAction("posts/getPost")

export const fetchPosts = createAsyncThunk(
    getPosts.type,
    async (params: QueryParams, { getState, dispatch, requestId }) => {
        try {
            const response = await API.getPosts(params)

            dispatch(showAlertFx({ message: `загруженно ${response.data.length}`, type: EAlertTypes.SUCCESS }))

            const total = response.headers["x-total-count"]

            return { items: response.data, totalCount: Number(total), requestId }
        } catch (error) {
            dispatch(showAlertFx({ message: String(error), type: EAlertTypes.ERROR }))
        }
    }
)

export const fetchPost = createAsyncThunk(
    getPost.type,
    async (params: { id: number } & QueryParams, { getState, dispatch }) => {
        const { id, _page } = params
        //@ts-ignore
        const { limit } = getState().posts

        const post = await API.getPost(id)
        const comments = await API.getPostComments(id, { _limit: limit, _page })

        dispatch(showAlertFx({ message: `загруженно ${comments.data.length}` }))
        dispatch(fetchUser(post.data.userId))

        const total = comments.headers["x-total-count"]

        return { ...post.data, comments: comments.data, total }
    }
)

export const fetchPostComments = createAsyncThunk(
    getPostsComments.type,
    async (id: number, { getState, dispatch, requestId }) => {
        try {
            const comments = await API.getPostComments(id)

            dispatch(showAlertFx({ message: `загруженно ${comments.data.length}`, type: EAlertTypes.SUCCESS }))

            const total = comments.headers["x-total-count"]

            return { items: comments.data, totalCount: Number(total), requestId }
        } catch (error) {
            dispatch(showAlertFx({ message: String(error), type: EAlertTypes.ERROR }))
        }
    }
)
