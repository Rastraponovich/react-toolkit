import { RootState } from "app/providers"
import { TDish } from "../lib"
export const useDishes = (state: RootState) => state.dishes.dishes

export const useGetDishes = (ids: number[]) => (state: RootState) =>
    state.dishes.dishes.filter((dish) => ids.some((id) => id === dish.id))

export const useGetDishById = (id: TDish["id"]) => (state: RootState) =>
    state.dishes.dishes.find((item) => item.id === id)
