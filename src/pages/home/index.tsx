import { useAppDispatch } from "app/hooks"
import { AlbumList, AlbumModel } from "entities/albums"
import { GetAlbumsButton } from "features/get-albums"
import { useEffect } from "react"
import { Pagination } from "widgets/pagination"

export const HomePage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(AlbumModel.actions.fetchAlbums())
    }, [])

    return (
        <section>
            <GetAlbumsButton />

            <AlbumList />
            <Pagination
                loading={false}
                currentPage={"1"}
                cb={function (num: number): void {
                    throw new Error("Function not implemented.")
                }}
                count={100}
                limit={10}
            />
        </section>
    )
}
