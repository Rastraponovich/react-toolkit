import { useAppDispatch } from "app/hooks"
import { AlbumModel } from "entities/albums"

export const GetAlbumsButton = () => {
    const dispatch = useAppDispatch()

    const handleClick = () => dispatch(AlbumModel.actions.fetchAlbums())

    return (
        <button onClick={handleClick} className="flex bg-blue-600 px-4 py-2 text-white first-letter:uppercase ">
            загрузить
        </button>
    )
}
