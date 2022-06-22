import { useAppDispatch, useAppSelector } from "app/hooks"
import { PostsModel } from "entities/posts"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const PostPage = () => {
    const dispatch = useAppDispatch()
    const params = useParams()
    useEffect(() => {
        dispatch(PostsModel.actions.fetchPost({ id: Number(params.id) }))
    }, [])

    const post = useAppSelector(PostsModel.selectors.usePost)
    return (
        <section className="flex flex-col space-y-4 px-10 py-5 text-gray-900">
            <span className="text-xl font-semibold first-letter:uppercase">{post.title}</span>
            <p className="rounded-lg bg-gray-100 p-2">{post.body}</p>
            <div className="flex flex-col space-y-4 rounded-lg bg-gray-100 p-4 ">
                <h3 className="text-2xl font-bold">Комментарии</h3>
                <div className="grid gap-2 p-4">
                    {post?.comments?.map((comment) => (
                        <div className="flex flex-col space-y-2 rounded-lg bg-gray-200 p-2">
                            <h4 className="text-sm font-semibold">{comment.email}</h4>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
