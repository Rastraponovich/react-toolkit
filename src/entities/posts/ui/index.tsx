import clsx from 'clsx'
import { useAppSelector } from "app/hooks"
import { selectors } from "../model"


export const Posts = () => {

    const posts = useAppSelector(selectors.usePosts)
    return
}
