import { useAppSelector } from "app/hooks"
import { AlbumModel } from "entities/albums"
import { PhotoThumbnail } from "../photo"

export const PhotosList = () => {
    const { photos } = useAppSelector(AlbumModel.selectors.useCurrentAlbum)

    return (
        <div className="grid grid-cols-4 place-items-center gap-2 rounded-lg bg-gray-100 p-2">
            {photos.map((photo) => (
                <PhotoThumbnail {...photo} key={photo.id} />
            ))}
        </div>
    )
}
