import { EmojiHappyIcon, XIcon } from "@heroicons/react/outline"
import { useAppDispatch, useAppSelector } from "app/hooks"
import clsx from "clsx"
import { PostsModel } from "entities/posts"
import { ChangeEvent, FormEvent, useState } from "react"

export const NewComment = () => {
    const [sticky, setSticky] = useState(false)

    const value = useAppSelector(PostsModel.selectors.useComment)

    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(PostsModel.actions.setComment(e.target.value))

    const handleSendComment = () => dispatch(PostsModel.actions.setComment(""))

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSendComment()
    }
    return (
        <form
            className={clsx(
                sticky && "fixed bottom-8 left-10 right-10",
                " flex items-center justify-between space-x-4 rounded-lg bg-gray-300 p-6 shadow-lg"
            )}
            onSubmit={handleSubmit}
        >
            <label className="relative flex grow items-center">
                <button className="absolute left-2 ">
                    <EmojiHappyIcon className="h-8 w-8 text-gray-400 duration-150 hover:text-gray-700" />
                </button>
                <input
                    type="text"
                    className="grow rounded-lg px-12 py-2 text-gray-900 placeholder:text-gray-500"
                    placeholder="новый комментарий"
                    onChange={handleChange}
                    value={value}
                />
                <button className="absolute right-2 ">
                    <XIcon className="h-6 w-6 text-gray-400 duration-150 hover:text-gray-700" />
                </button>
            </label>
            <button className="flex rounded-lg bg-blue-600 px-4 py-2 text-white first-letter:uppercase">
                отправить
            </button>
        </form>
    )
}
