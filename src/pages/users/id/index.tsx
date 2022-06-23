import { useAppDispatch, useAppSelector } from "app/hooks"
import { Album, AlbumList, AlbumListSkeleton, AlbumModel } from "entities/albums"
import { PostsList, PostsModel } from "entities/posts"
import { UserCard, UserModel } from "entities/users"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const UserPage = () => {
    const params = useParams()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserModel.actions.fetchUser(Number(params.id)))
    }, [])

    const pending = useAppSelector(AlbumModel.selectors.usePending)
    const albums = useAppSelector(AlbumModel.selectors.useAlbums)
    const posts = useAppSelector(PostsModel.selectors.usePosts)

    return (
        <section className="flex flex-col space-y-4 px-10 py-5">
            <UserCard />
            <div className="flex flex-col space-y-2 rounded-lg bg-gray-100 p-2 text-gray-900">
                <h2 className="text-2xl font-semibold first-letter:uppercase">список альбомов: {albums.length}</h2>
                {pending ? <AlbumListSkeleton /> : <AlbumList />}
            </div>

            <div className="flex flex-col space-y-2 rounded-lg bg-gray-100 p-2 text-gray-900">
                <h2 className="text-2xl font-semibold first-letter:uppercase">список постов: {posts.length}</h2>

                {pending ? <AlbumListSkeleton /> : <PostsList />}
            </div>
        </section>
    )
}
