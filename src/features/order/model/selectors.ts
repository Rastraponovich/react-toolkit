import { useAppSelector } from "app/hooks"
import { RootState } from "app/providers"

export const useOrderQuantiyDish = (id: number) => (state: RootState) => {
    return state.order.dishes.find((dish) => dish.dishId === id)?.quantity
}

export const useOrderQuantiyDishes = (state: RootState) => state.order.totalItemsCount
export const useOrder = (state: RootState) => state.order.dishes
export const useOrderIds = (state: RootState) => state.order.dishes.map((item) => item.dishId)
