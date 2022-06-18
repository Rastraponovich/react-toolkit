import { useAppDispatch, useAppSelector } from "app/hooks"
import { AlbumList, AlbumModel } from "entities/albums"
import { GetAlbumsButton } from "features/get-albums"

export const HomePage = () => {
    const albums = useAppSelector(AlbumModel.selectors.useAlbums)
    const dispatch = useAppDispatch()

    return (
        <section>
            <GetAlbumsButton />

            <AlbumList />
        </section>
    )
}
