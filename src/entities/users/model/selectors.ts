import { useAppSelector } from "app/hooks"
import { RootState } from "app/providers"

export const useUser = (state: RootState) => state.users.user
export const useLoading = (state: RootState) => state.users.loading
export const usePending = (state: RootState) => state.users.pending
export const useUserAlbums = (state: RootState) => state.users.albums
