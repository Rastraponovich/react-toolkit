import { RootState } from "app/providers"

export const useMessage = (state: RootState) => state.alert.message
export const useMessages = (state: RootState) => state.alert.messages

export const useOpened = (state: RootState) => state.alert.opened
export const useAlertType = (state: RootState) => state.alert.type
