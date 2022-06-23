import { RootState } from "app/providers"
export const usePosts = (state: RootState) => state.posts.posts
export const usePost = (state: RootState) => state.posts.post
export const useComment = (state: RootState) => state.posts.comment
