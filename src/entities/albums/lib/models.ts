export type TAlbum = {
    userId: number
    id: number
    title: string
}
export type TPhoto = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export type DetailedAlbum = {
    photos: TPhoto[]
} & TAlbum
