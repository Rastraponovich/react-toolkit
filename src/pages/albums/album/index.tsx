import { useAppDispatch, useAppSelector } from "app/hooks"
import { AlbumModel, PhotosList } from "entities/albums"
import { lazy, useEffect } from "react"
import { useParams } from "react-router-dom"

// const PhotosList = lazy(() => import("entities/albums").then((module) => ({ default: module.PhotosList })))

export const AlbumPage = () => {
    const params = useParams()
    const dispatch = useAppDispatch()

    const album = useAppSelector(AlbumModel.selectors.useCurrentAlbum)

    useEffect(() => {
        dispatch(AlbumModel.actions.fetchAlbum(Number(params.id)))
    }, [])

    return (
        <section className="flex  flex-col px-10 py-5 text-gray-900">
            <h2 className="my-4 text-2xl font-semibold">Альбом: {album.title}</h2>
            <PhotosList />
        </section>
    )
}
