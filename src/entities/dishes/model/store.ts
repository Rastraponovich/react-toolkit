import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TDish } from "../lib"

type TInitialState = {
    dishes: TDish[]
}

const initialState: TInitialState = {
    dishes: [
        {
            id: 1,
            name: "ягненок",
            categoryId: 1,
            weigth: "225 г",
            price: 560,
            description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
            id: 2,
            name: "индейка",
            categoryId: 1,
            weigth: "225 г",
            price: 560,
            description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
            id: 3,
            name: "гусь",
            categoryId: 1,
            weigth: "225 г",
            price: 560,
            description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
            id: 4,
            name: "утка",
            categoryId: 1,
            weigth: "225 г",
            price: 560,

            description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
            id: 5,
            name: "свинина",
            categoryId: 1,
            weigth: "225 г",
            price: 560,
            description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
            id: 6,
            name: "свинина",
            categoryId: 1,
            weigth: "225 г",
            price: 560,
            description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
            id: 7,
            name: "свинина",
            categoryId: 1,
            weigth: "225 г",
            price: 560,
            description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
            id: 8,
            name: "свинина",
            categoryId: 1,
            weigth: "225 г",
            price: 560,
            description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
    ],
}

export const DishSlice = createSlice({
    name: "dishes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
})
