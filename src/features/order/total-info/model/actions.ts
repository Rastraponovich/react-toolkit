import { useAppDispatch } from "app/hooks"
import { useCallback } from "react"

export const useTotalInfoSumm = () => {
    const dispatch = useAppDispatch()

    return useCallback(() => {}, [dispatch])
}
