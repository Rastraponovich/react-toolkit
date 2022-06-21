import { TAlbum } from "entities/albums/lib"
import { memo } from "react"
import { Link } from "react-router-dom"

interface AlbumProps extends TAlbum {}
export const Album = memo(({ title, userId, id }: AlbumProps) => {
    return (
        <Link to={`/albums/${id}?page=1`}>
            <div className="flex flex-col space-y-2 rounded-lg bg-gray-50 p-2 shadow-md">
                <h2 className="text-base">{title}</h2>
                <span>user: {userId}</span>
            </div>
        </Link>
    )
})

Album.displayName = "Album"

export const AlbumSkeleton = () => {
    return (
        <div className="flex animate-pulse  flex-col space-y-2 rounded-lg bg-gray-50 py-2 px-4 shadow-md">
            <div className="h-16 rounded-lg bg-gray-200"></div>
            <div className="h-6 rounded-lg bg-gray-200"></div>
        </div>
    )
}
