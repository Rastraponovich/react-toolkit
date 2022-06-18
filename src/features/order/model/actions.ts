import { useAppDispatch } from "app/hooks"
import { TDish } from "entities/dishes/lib"
import { useCallback } from "react"
import { decreaseQuantity, increaseQuantity, addToOrder, removeDishFromOrder } from "./store"

export const useAddToOrder = (dish: Partial<TDish>) => {
    const dispatch = useAppDispatch()

    return useCallback(() => {
        dispatch(addToOrder(dish))
    }, [dispatch])
}

export const useIncreaseDish = (id: number) => {
    const dispatch = useAppDispatch()

    return useCallback(() => {
        dispatch(increaseQuantity(id))
    }, [dispatch])
}
export const useDecreaseDish = (id: number) => {
    const dispatch = useAppDispatch()

    return useCallback(() => {
        dispatch(decreaseQuantity(id))
    }, [dispatch])
}
