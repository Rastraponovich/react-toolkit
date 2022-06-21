import { useAppSelector } from "app/hooks"
import { RootState } from "app/providers"

export const useAlbums = (state: RootState) => state.album.albums
export const useAlbumsCount = (state: RootState) => state.album.totalCount
export const useCurrentAlbum = (state: RootState) => state.album.currentAlbum
export const useLoading = (state: RootState) => state.album.loading
export const usePending = (state: RootState) => state.album.pending

export const useLimit = (state: RootState) => state.album.limit
