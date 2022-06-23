import { EmojiHappyIcon, XIcon } from "@heroicons/react/outline"
import { useAppDispatch, useAppSelector } from "app/hooks"
import clsx from "clsx"
import { CommentList, PostsModel } from "entities/posts"
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
            <form
                className={clsx(
                    sticky && "fixed bottom-8 left-10 right-10",
                    " flex items-center justify-between space-x-4 rounded-lg bg-gray-300 p-6 shadow-lg"
                )}
                onSubmit={(e) => e.preventDefault()}
            >
                <label className="relative flex grow items-center">
                    <button className="absolute left-2 ">
                        <EmojiHappyIcon className="h-8 w-8 text-gray-400 duration-150 hover:text-gray-700" />
                    </button>
                    <input
                        type="text"
                        className="grow rounded-lg px-12 py-2 text-gray-900 placeholder:text-gray-500"
                        placeholder="новый комментарий"
                    />
                    <button className="absolute right-2 ">
                        <XIcon className="h-6 w-6 text-gray-400 duration-150 hover:text-gray-700" />
                    </button>
                </label>
                <button className="flex rounded-lg bg-blue-600 px-4 py-2 text-white first-letter:uppercase">
                    отправить
                </button>
            </form>
        </section>
    )
}
