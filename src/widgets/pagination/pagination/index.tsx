import { memo, useState, useEffect, useCallback } from "react"
import { PaginationButton } from "../pagination-button"
import { PaginationNavButton } from "../pagination-nav-button"

interface PaginationProps {
    loading: boolean
    currentPage: string
    cb(num: number): void
    count: number
    limit: number
}

export const Pagination = memo(({ count, limit, currentPage, loading, cb }: PaginationProps) => {
    const [pages, setPages] = useState(count / limit)

    useEffect(() => {
        setPages(count / limit)
    }, [count, limit])

    const prevPage = useCallback(() => {
        const id = Number(currentPage)
        cb(id > 1 ? id - 1 : pages)
    }, [currentPage])

    const nextPage = useCallback(() => {
        const id = Number(currentPage)
        cb(id === pages ? 1 : id + 1)
    }, [currentPage])
    return (
        <div className="flex items-center space-x-2 self-center p-2">
            <PaginationNavButton onClick={prevPage} title="предидущая" disabled={loading} />
            {[...Array(pages).keys()]
                .map((i) => i + 1)
                .map((num) => (
                    <PaginationButton num={num} currentPage={currentPage} onClick={cb} key={num} disabled={loading} />
                ))}
            <PaginationNavButton onClick={nextPage} title="следующая" disabled={loading} />
            <div className="flex h-8 items-center  space-x-2">
                <span className="flex h-8 items-center rounded-lg border border-gray-200 px-2 ">
                    Показывать: {limit}
                </span>
            </div>
        </div>
    )
})

Pagination.displayName = "Pagination"
