import { RootState } from "app/providers"

export const useOrderTotal = (state: RootState) => state.order.totalPrice
export const useMinOrderSum = (state: RootState) => state.order.minOrderSum
