import { EmojiHappyIcon, XIcon } from "@heroicons/react/outline"
import { useAppDispatch, useAppSelector } from "app/hooks"
import clsx from "clsx"
import { CommentList, PostsModel } from "entities/posts"
import { NewComment } from "features/new-comment"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const PostPage = () => {
    const dispatch = useAppDispatch()
    const params = useParams()
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        dispatch(PostsModel.actions.fetchPost({ id: Number(params.id) }))
    }, [])

    const post = useAppSelector(PostsModel.selectors.usePost)
    return (
        <section className="relative flex flex-col space-y-4 px-10 py-5 text-gray-900">
            <span className="text-xl font-semibold first-letter:uppercase">{post.title}</span>

            <p className="rounded-lg bg-gray-100 p-2">{post.body}</p>
            <CommentList />
            <NewComment />
        </section>
    )
}
