import { TPhoto } from "entities/albums/lib"
import { memo } from "react"

interface PhotoThumbnailProps extends TPhoto {}
export const PhotoThumbnail = memo(({ id, title, thumbnailUrl }: PhotoThumbnailProps) => {
    return (
        <figure key={id} className="flex w-[150px] flex-col-reverse  rounded-lg bg-gray-50 shadow-md">
            <figcaption className="flex flex-col rounded-b-lg bg-gray-100 p-2 text-sm">
                <h4 className="truncate">{title}</h4>
            </figcaption>
            <img src={thumbnailUrl} height={150} width={150} className="rounded-t-lg" />
        </figure>
    )
})

PhotoThumbnail.displayName = "PhotoThumbnail"
