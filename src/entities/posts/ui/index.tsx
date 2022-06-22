import clsx from "clsx"
import { useAppSelector } from "app/hooks"
import { selectors } from "../model"
import { memo } from "react"
import { ReplyIcon, HeartIcon as HeartIconSolid } from "@heroicons/react/solid"
import { UserCircleIcon, HeartIcon, EmojiHappyIcon, EyeIcon } from "@heroicons/react/outline"
import type { TComments, TPosts } from "../lib"
import { PostsModel } from ".."
import { Link } from "react-router-dom"

interface PostProps {
    post: TPosts
}
export const Post = memo(({ post }: PostProps) => {
    return (
        <div className="flex space-x-4 rounded-lg border-2 bg-gray-100 p-2 text-sm text-gray-600">
            <UserCircleIcon className="h-10 w-10 shrink-0 text-gray-500" />
            <div className="sapce-y-2 flex grow flex-col  font-semibold">
                <h3>{post.title}</h3>
                <p className="font-light">{post.body}</p>
            </div>
        </div>
    )
})
Post.displayName = "Post"

export const PostsList = () => {
    const posts = useAppSelector(PostsModel.selectors.usePosts)

    return (
        <div className="grid gap-4">
            {posts.map((item) => (
                <Link key={item.id} to={`/posts/${item.id}`}>
                    <Post post={item} />
                </Link>
            ))}
        </div>
    )
}

export const CommentList = () => {
    const comments = useAppSelector(PostsModel.selectors.usePost).comments
    return (
        <div className="flex flex-col space-y-4 rounded-lg bg-gray-100 p-4 ">
            <div className="flex items-center space-x-2 text-2xl">
                <h3 className=" font-bold">Комментарии</h3>
                <span className="font-light">{comments?.length}</span>
            </div>

            <div className="flex flex-col space-y-2">
                {comments?.map((comment) => (
                    <Comment {...comment} />
                ))}
            </div>
        </div>
    )
}

interface CommentProps extends TComments {}

const Comment = memo((comment: CommentProps) => {
    return (
        <div className="flex  space-x-4 rounded-lg  bg-white py-2 px-4 text-sm text-gray-900 shadow-md">
            <div className="flex flex-col items-center space-y-2 text-sm font-light">
                <UserCircleIcon className="h-16 w-16 shrink-0 text-gray-500" />
                <span>Пользователь</span>
            </div>
            <div className="flex grow flex-col space-y-2  font-semibold">
                <h3>{comment.email}</h3>
                <p className="font-light">{comment.body}</p>
                <div className="flex space-x-4 self-end">
                    <button>
                        <ReplyIcon className="h-4 w-4 text-gray-900" />
                    </button>
                    <button>
                        <HeartIcon className="h-4 w-4 text-gray-900" />
                    </button>
                    <button>
                        <EmojiHappyIcon className="h-4 w-4 text-gray-900" />
                    </button>
                    <button>
                        <EyeIcon className="h-4 w-4 text-gray-900" />
                    </button>
                    <span>{comment.email.length * 150}</span>
                </div>
            </div>
        </div>
    )
})
