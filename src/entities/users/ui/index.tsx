import { useAppSelector } from "app/hooks"
import { Link, Navigate } from "react-router-dom"
import { selectors } from "../model"

export const UserCard = () => {
    const user = useAppSelector(selectors.useUser)

    return (
        <div className="flex flex-col space-y-2 rounded-lg bg-gray-50 p-4 text-sm shadow-lg">
            <h2>name: {user?.name}</h2>
            <span>email: {user?.email}</span>
            <span>website: {user?.website}</span>
            <span>username: {user?.username}</span>

            <Link to={`/users/${user.id}`}> перейти</Link>

            <h3 className="font-bold">Company: </h3>
            <div className="flex flex-col rounded-lg border p-2">
                <span>{user.company?.name}</span>
                <span>{user.company?.catchPhrase}</span>
                <span>{user.company?.bs}</span>
            </div>
        </div>
    )
}
