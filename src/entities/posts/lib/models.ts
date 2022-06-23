export type TPosts = {
    userId: number
    id: number
    title: string
    body: string
    comments?: TComments[]
}

export type TComments = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}
