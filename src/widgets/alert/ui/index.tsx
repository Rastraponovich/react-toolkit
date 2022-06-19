import { useAppDispatch, useAppSelector } from "app/hooks"
import { AlertModel } from ".."
import { Transition } from "@headlessui/react"
import { Fragment, memo, useCallback, useEffect, useRef, useState } from "react"

export const Alert = () => {
    const messages = useAppSelector(AlertModel.selectors.useMessages)

    const dispatch = useAppDispatch()

    const handleClose = useCallback((id: string) => {
        dispatch(AlertModel.actions.hideAlert(id))
    }, [])

    return (
        <div className="fixed left-8 bottom-8 flex flex-col space-y-2">
            {messages.map((message) => (
                <AlertMessage {...message} key={message.id} interval={3000} onClose={handleClose} />
            ))}
        </div>
    )
}

interface AlertMessage {
    message: string
    id: string
    type: string
    onClose(id: string): void
    interval: number
}
const AlertMessage = memo(({ message, type, onClose, interval, id }: AlertMessage) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        let time = interval / 1000
        const int = setInterval(() => {
            if (time > 0) time - 1
        }, 1000)

        return () => clearInterval(int)
    }, [])

    useEffect(() => {
        setOpen(true)
        const timer = setTimeout(() => {
            setOpen(false)
            // onClose(id)
            //
        }, interval)

        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <Transition
            as={Fragment}
            show={open}
            enter="transform duration-300 opacity"
            enterFrom="translate-y-full opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transform duration-500 opacity"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="-translate-x-full opacity-0"
        >
            <div className="flex h-[50px] w-[200px] flex-col rounded-lg bg-green-600 p-4 text-white shadow-lg">
                <span>{message}</span>
            </div>
        </Transition>
    )
})

AlertMessage.displayName = "AlertMessage"
