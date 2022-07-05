import { ChangeEvent, MouseEvent, useCallback, useEffect, useRef, useState } from "react"

export const useThrottleFn = <T, U extends any[]>(fn: (...args: U) => T, ms: number = 200, args: U) => {
    const [state, setState] = useState<T | null>(null)
    const timeout = useRef<ReturnType<typeof setTimeout>>()
    const nextArgs = useRef<U>()

    useEffect(() => {
        if (!timeout.current) {
            setState(fn(...args))
            const timeoutCallback = () => {
                if (nextArgs.current) {
                    setState(fn(...nextArgs.current))
                    nextArgs.current = undefined
                    timeout.current = setTimeout(timeoutCallback, ms)
                } else {
                    timeout.current = undefined
                }
            }
            timeout.current = setTimeout(timeoutCallback, ms)
        } else {
            nextArgs.current = args
        }
    }, args)

    return state
}

export const useDraggable = () => {
    const ref = useRef<any>(null)
    const [diff, setDiff] = useState({
        diffX: 0,
        diffY: 0,
    })

    const [allowDragging, setAllowDragging] = useState<boolean>(false)
    const [picked, setPicked] = useState(false)

    const onDragStart = useCallback(
        (e: MouseEvent<HTMLElement>) => {
            e.preventDefault()

            setDiff({
                diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
                diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            })
            setPicked(true)
            setAllowDragging(true)
        },
        [picked, diff, allowDragging, setPicked, setAllowDragging]
    )
    const onDragging = useCallback(
        (e: MouseEvent<HTMLElement>) => {
            if (allowDragging) {
                ref.current.style.left = e.screenX - diff.diffX + "px"
                ref.current.style.top = e.screenY - diff.diffY + "px"
            }
        },
        [allowDragging, ref]
    )
    const onDragEnd = useCallback((e: MouseEvent<HTMLElement>) => {
        setAllowDragging(false)
        setPicked(false)
    }, [])

    return { ref, onDragStart, onDragging, onDragEnd }
}
