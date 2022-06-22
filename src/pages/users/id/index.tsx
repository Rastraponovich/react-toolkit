import { useAppDispatch, useAppSelector } from "app/hooks"
import { Album, AlbumList, AlbumListSkeleton, AlbumModel } from "entities/albums"
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

    return (
        <section className="flex flex-col space-y-4 px-10 py-5">
            <UserCard />
            {pending ? <AlbumListSkeleton /> : <AlbumList />}
        </section>
    )
}
