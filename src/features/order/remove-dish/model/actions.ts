import { useAppDispatch } from "app/hooks"
import { removeDishFromOrder } from "features/order/model/store"
import { useCallback } from "react"

export const useRemoveDishFromOrder = (id: number) => {
    const dispatch = useAppDispatch()

    return useCallback(() => {
        dispatch(removeDishFromOrder(id))
    }, [dispatch])
}
