import { useAppSelector } from "app/hooks"
import { RootState } from "app/providers"

export const useAlbums = (state: RootState) => state.album.albums
export const useAlbumsCount = (state: RootState) => state.album.albums.length
export const useCurrentAlbum = (state: RootState) => state.album.currentAlbum
export const usePending = (state: RootState) => state.album.loading
export const useLimit = (state: RootState) => state.album.limit
