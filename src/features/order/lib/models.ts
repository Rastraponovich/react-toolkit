import { TDish } from "entities/dishes/lib"

export type TOrderDishes = Pick<TDish, "name" | "price"> & { id: number; dishId: TDish["id"]; quantity: number }
