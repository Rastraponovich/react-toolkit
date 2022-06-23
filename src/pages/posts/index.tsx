import { useAppDispatch } from "app/hooks"
import { PostsList, PostsModel } from "entities/posts"
import { useEffect } from "react"

export const PostsPage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(PostsModel.actions.fetchPosts({ _limit: 10, _page: 1 }))
    }, [])

    return (
        <section className="flex grow flex-col space-y-6 px-10 py-5 text-gray-900">
            <h2 className="text-2xl font-bold first-letter:uppercase ">Список постов</h2>
            <PostsList />
        </section>
    )
}
