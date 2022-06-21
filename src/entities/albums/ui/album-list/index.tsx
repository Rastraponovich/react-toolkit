import { useAppSelector } from "app/hooks"
import { AlbumModel } from "entities/albums"
import { Album, AlbumSkeleton } from "../album"

export const AlbumList = () => {
    const albums = useAppSelector(AlbumModel.selectors.useAlbums)

    return (
        <div className="grid gap-4 px-5 text-sm md:grid-cols-4">
            {albums.map((album) => (
                <Album {...album} key={album.id} />
            ))}
        </div>
    )
}
export const AlbumListSkeleton = () => {
    const limit = 10

    return (
        <div className="grid gap-4 text-sm md:grid-cols-4">
            {[...Array(10).keys()]
                .map((i) => i)
                .map((album) => (
                    <AlbumSkeleton key={album} />
                ))}
        </div>
    )
}
