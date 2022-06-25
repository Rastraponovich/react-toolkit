import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchUser } from "entities/users/model/actions"
import type { QueryParams } from "shared/lib"
import { EAlertTypes } from "widgets/alert/lib"
import { showAlertFx } from "widgets/alert/model/actions"
import { API, TPosts } from "../lib"

const getPosts = createAction("posts/getPosts")
const getPostsComments = createAction("posts/getPostComments")

const getPost = createAction("posts/getPost")
const getUserPosts = createAction("posts/getUserPosts")

export const setComment = createAction<string>("posts/setComment")

export const fetchPosts = createAsyncThunk(
    getPosts.type,
    async (params: QueryParams, { getState, dispatch, requestId }) => {
        try {
            const response = await API.getPosts(params)

            dispatch(showAlertFx({ message: `загруженно ${response.data.length} постов`, type: EAlertTypes.SUCCESS }))

            const total = response.headers["x-total-count"]

            return { items: response.data, totalCount: Number(total), requestId }
        } catch (error) {
            dispatch(showAlertFx({ message: "произошла ошибка загрузки постов", type: EAlertTypes.ERROR }))
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

        dispatch(showAlertFx({ message: `загруженно ${comments.data.length} комментариев к посту с id ${id}` }))
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

            dispatch(
                showAlertFx({
                    message: `загруженно ${comments.data.length} комментариев к посту ${id}`,
                    type: EAlertTypes.SUCCESS,
                })
            )

            const total = comments.headers["x-total-count"]

            return { items: comments.data, totalCount: Number(total), requestId }
        } catch (error) {
            dispatch(showAlertFx({ message: "произошла ошибка загруки комментариев", type: EAlertTypes.ERROR }))
        }
    }
)

export const fetchUserPosts = createAsyncThunk<TPosts[] | undefined, number>(
    getUserPosts.type,
    async (id, { dispatch }) => {
        try {
            const posts = await API.getUserPosts(id)
            dispatch(
                showAlertFx({
                    message: `загруженно ${posts!.data.length} постов пользователя с id ${id}`,
                    type: EAlertTypes.SUCCESS,
                })
            )
            return posts.data
        } catch (error) {
            dispatch(showAlertFx({ message: "произошла ошибка загрузки постов", type: EAlertTypes.ERROR }))
        }
    }
)
