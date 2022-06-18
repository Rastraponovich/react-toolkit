import { memo } from "react"

interface PaginationNavButtonProps {
    onClick(): void
    title: string
    disabled: boolean
}
export const PaginationNavButton = memo(({ onClick, title, disabled }: PaginationNavButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className="flex h-8 items-center justify-center  rounded-lg border bg-gray-200 px-2 text-gray-900 duration-150 hover:border-gray-200 hover:bg-transparent disabled:opacity-25"
        >
            {title}
        </button>
    )
})
PaginationNavButton.displayName = "PaginationNavButton"
