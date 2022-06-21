import { useAppDispatch, useAppSelector } from "app/hooks"
import { Album } from "entities/albums"
import { UserCard, UserModel } from "entities/users"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const UserPage = () => {
    const params = useParams()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserModel.actions.fetchUser(Number(params.id)))
    }, [])

    const user = useAppSelector(UserModel.selectors.useUser)
    const userAlbums = useAppSelector(UserModel.selectors.useUserAlbums)

    return (
        <section className="flex flex-col space-y-4 px-10 py-5">
            <UserCard />
            <div className="grid grid-cols-4 gap-2 rounded-lg bg-gray-50 p-2 shadow-lg">
                {userAlbums.map((album) => (
                    <Album {...album} key={album.id} />
                ))}
            </div>
        </section>
    )
}
