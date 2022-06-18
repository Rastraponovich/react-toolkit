import { useAppSelector } from "app/hooks"
import { AlbumModel } from "entities/albums"
import { Album } from "../album"

export const AlbumList = () => {
    const albums = useAppSelector(AlbumModel.selectors.useAlbums)

    return (
        <div className="grid gap-4 text-sm md:grid-cols-4">
            {albums.map((album) => (
                <Album {...album} key={album.id} />
            ))}
        </div>
    )
}
