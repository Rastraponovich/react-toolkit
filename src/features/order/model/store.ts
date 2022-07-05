import { createSlice } from "@reduxjs/toolkit"
import { TOrderDishes } from "features/order/lib/models"

type TInitialState = {
    dishes: TOrderDishes[]
    totalItemsCount: number
    totalPrice: number
    minOrderSum: number
}

const initialState: TInitialState = {
    dishes: [],
    totalItemsCount: 0,
    totalPrice: 0,
    minOrderSum: 1500,
}

export const OrderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addToOrder(state, action) {
            state.dishes.push({ ...action.payload, quantity: 1, id: state.dishes.length, dishId: action.payload.id })
            state.totalItemsCount = state.totalItemsCount + 1
            state.totalPrice = state.totalPrice + action.payload.price
        },
        increaseQuantity(state, action) {
            const currentDish = state.dishes.find((item) => item.dishId === action.payload)
            if (currentDish) {
                state.dishes = state.dishes.map((dish) => {
                    if (dish.dishId === currentDish.dishId) return { ...dish, quantity: dish.quantity + 1 }

                    return dish
                })
                state.totalItemsCount = state.totalItemsCount + 1
                state.totalPrice = state.totalPrice + currentDish.price
            }
        },
        decreaseQuantity(state, action) {
            const currentDish = state.dishes.find((item) => item.dishId === action.payload)
            if (currentDish) {
                if (currentDish.quantity === 1) {
                    state.dishes = state.dishes.filter((dish) => dish.dishId !== currentDish.dishId)
                } else {
                    state.dishes = state.dishes.map((dish) => {
                        if (dish.dishId === currentDish.dishId) return { ...dish, quantity: dish.quantity - 1 }

                        return dish
                    })
                }
                state.totalItemsCount = state.totalItemsCount - 1
                state.totalPrice = state.totalPrice - currentDish.price
            }
        },
        removeDishFromOrder(state, action) {
<<<<<<< HEAD
            //разобратся

            if (state.dishes.length === 1) {
                state.dishes = []
                state.totalPrice = 0
                state.totalItemsCount = 0
            } else {
                const currentDishIdx = state.dishes.findIndex((line) => line.id === action.payload)
                const currentDish = state.dishes.find((line) => line.id === action.payload)

                if (currentDishIdx && currentDish) {
                    state.totalItemsCount = state.totalItemsCount - currentDish.quantity
                    state.totalPrice = state.totalPrice - currentDish.price * currentDish.quantity
                    state.dishes.splice(currentDishIdx, 1)
                }
=======
            const currentDishIdx = state.dishes.findIndex((dish) => dish.id === action.payload)
            const currentDish = state.dishes.find((line) => line.id === action.payload)

            if (currentDishIdx && currentDish) {
                state.totalItemsCount = state.totalItemsCount - currentDish.quantity
                state.totalPrice = state.totalPrice - currentDish.price * currentDish.quantity
                state.dishes.splice(currentDishIdx, 1)
>>>>>>> logos-application
            }
        },
    },
    extraReducers: (builder) => {},
})

export const { addToOrder, increaseQuantity, decreaseQuantity, removeDishFromOrder } = OrderSlice.actions
