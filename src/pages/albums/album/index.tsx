import { useAppDispatch, useAppSelector } from "app/hooks"
import { AlbumModel, PhotosList } from "entities/albums"
import { useCallback, useEffect, useRef, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { Pagination } from "widgets/pagination"

export const AlbumPage = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    const [search, setSearch] = useSearchParams()
    const [page, setPage] = useState(search.get("page"))

    const album = useAppSelector(AlbumModel.selectors.useCurrentAlbum)
    const loading = useAppSelector(AlbumModel.selectors.usePending)
    const limit = useAppSelector(AlbumModel.selectors.useLimit)

    useEffect(() => {
        setPage((prev) => (prev === search.get("page") ? prev : search.get("page")))
    }, [search])

    useEffect(() => {
        const getPage = () => {
            dispatch(AlbumModel.actions.fetchAlbum({ id: Number(params.id), _page: Number(page) }))
        }
        getPage()
    }, [page])

    const handleClick = useCallback(
        (id: number) => {
            setSearch({ page: String(id) })
        },
        [search]
    )

    return (
        <section className="flex  flex-col px-10 py-5 text-gray-900">
            <h2 className="my-4 text-2xl font-semibold">Альбом: {album.title}</h2>
            <div className="flex flex-col space-y-2 rounded-lg bg-gray-100 p-2 text-xl">
                <h3 className="font-semibold first-letter:uppercase">
                    фотографии: {Number(page) * limit} / {album.total} шт.
                </h3>
                <PhotosList />
            </div>

            <Pagination
                cb={handleClick}
                loading={loading}
                currentPage={page!}
                count={Number(album.total)}
                limit={limit}
            />
        </section>
    )
}
