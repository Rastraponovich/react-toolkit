import { useAppDispatch, useAppSelector } from "app/hooks"
import { AlbumList, AlbumListSkeleton, AlbumModel } from "entities/albums"
import { GetAlbumsButton } from "features/get-albums"
import { useCallback, useEffect, useState } from "react"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { Pagination } from "widgets/pagination"

export const HomePage = () => {
    const dispatch = useAppDispatch()
    const [search, setSearch] = useSearchParams()
    const pending = useAppSelector(AlbumModel.selectors.usePending)
    const loading = useAppSelector(AlbumModel.selectors.useLoading)

    const totalCount = useAppSelector(AlbumModel.selectors.useAlbumsCount)

    const [page, setPage] = useState(search.get("page"))

    useEffect(() => {
        dispatch(AlbumModel.actions.fetchAlbums({ _page: Number(page), _limit: 10 }))
    }, [page])

    const handleSetPage = useCallback(
        (page: number) => {
            setSearch({ page: String(page) })
        },
        [search]
    )

    useEffect(() => {
        setPage(search.get("page"))
    }, [search])

    return (
        <section className="flex grow flex-col justify-between space-y-4">
            <GetAlbumsButton />
            <div className="flex justify-end px-5">
                <span>
                    показано {Number(page) * 10} из {totalCount}
                </span>
            </div>

            {pending ? <AlbumListSkeleton /> : <AlbumList />}
            <Pagination loading={loading} currentPage={page!} cb={handleSetPage} count={totalCount} limit={10} />
        </section>
    )
}
