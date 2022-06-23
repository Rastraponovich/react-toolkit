import { TDish } from "entities/dishes/lib"

export type TCategory = {
    id: number
    name: string
    dishes: TDish[]
}
