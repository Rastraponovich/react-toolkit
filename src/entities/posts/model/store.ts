import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ChangeEvent } from "react"
import { actions } from "."
import { TComments, TPosts } from "../lib"
import { fetchPost, fetchPostComments, fetchPosts, fetchUserPosts, setComment } from "./actions"

type TInitialState = {
    posts: TPosts[]
    post: TPosts
    totalCount: number
    requestId: string | undefined
    loading: boolean
    pending: boolean

    comment: string
}

const initialState: TInitialState = {
    posts: [],
    post: { comments: [] as TComments[] } as TPosts,
    totalCount: 0,
    requestId: undefined,
    loading: false,
    comment: "",
    //temporary realization

    pending: false,
}

export const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<any>) => {
            state.posts = action.payload.items
            state.totalCount = action.payload.totalCount
            state.requestId = undefined
            state.loading = false
            state.pending = false
        })
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.posts = []
            state.requestId = action.meta.requestId
            state.loading = true
            state.pending = true
        })
        builder.addCase(fetchPost.fulfilled, (state, action: PayloadAction<any>) => {
            //need fix
            state.loading = false
            state.post = action.payload
        })
        builder.addCase(fetchPost.pending, (state, action) => {
            state.loading = true
            state.post = {} as TPosts
            state.comment = ""
        })
        builder.addCase(setComment, (state, action) => {
            state.comment = action.payload
        })

        builder.addCase(fetchPostComments.fulfilled, (state, action: PayloadAction<any>) => {
            state.post.comments = action.payload.items
            state.totalCount = action.payload.totalCount
            state.requestId = undefined
            state.loading = false
            state.pending = false
            state.comment = ""
        })
        builder.addCase(fetchPostComments.pending, (state, action) => {
            state.post.comments = []
            state.requestId = action.meta.requestId
            state.loading = true
            state.pending = true
            state.comment = ""
        })
        builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
            state.posts = action.payload!
        })
    },
})
