import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TPosts } from "../lib"
import { fetchPost, fetchPostComments, fetchPosts } from "./actions"

type TInitialState = {
    posts: TPosts[]
    post: TPosts
    totalCount: number
    requestId: string | undefined
    loading: boolean
    pending: boolean
}

const initialState: TInitialState = {
    posts: [],
    post: { comments: [] } as TPosts,
    totalCount: 0,
    requestId: undefined,
    loading: false,

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
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false
            state.post = action.payload
        })
        builder.addCase(fetchPost.pending, (state, action) => {
            state.loading = true
            state.post = {} as TPosts
        })

        builder.addCase(fetchPostComments.fulfilled, (state, action: PayloadAction<any>) => {
            state.post.comments = action.payload.items
            state.totalCount = action.payload.totalCount
            state.requestId = undefined
            state.loading = false
            state.pending = false
        })
        builder.addCase(fetchPostComments.pending, (state, action) => {
            state.post.comments = []
            state.requestId = action.meta.requestId
            state.loading = true
            state.pending = true
        })
    },
})
