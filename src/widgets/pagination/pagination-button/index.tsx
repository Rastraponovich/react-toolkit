import clsx from "clsx"
import { memo } from "react"

interface PaginationButtonProps {
    currentPage: string
    num: number
    onClick(num: number): void
    disabled: boolean
}

export const PaginationButton = memo(({ currentPage, num, onClick, disabled }: PaginationButtonProps) => {
    const handleClick = () => {
        onClick(num)
    }
    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={clsx(
                "flex h-8 w-8  items-center justify-center rounded-lg border duration-150  hover:border-gray-200 hover:bg-transparent disabled:opacity-25",
                Number(currentPage) === num ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"
            )}
        >
            {num}
        </button>
    )
})
PaginationButton.displayName = "PaginationButton"
