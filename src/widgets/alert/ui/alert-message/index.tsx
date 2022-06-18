import { Transition } from "@headlessui/react"
import clsx from "clsx"
import { memo, useState, useEffect, Fragment } from "react"
import type { TAlertType } from "widgets/alert/lib"

import {
    XCircleIcon,
    CheckCircleIcon,
    ExclamationIcon,
    InformationCircleIcon,
    ExclamationCircleIcon,

} from "@heroicons/react/outline"

interface AlertMessage {
    message: string
    id: string
    type: TAlertType
    onClose(id: string): void
    interval: number
}
export const AlertMessage = memo(({ message, type, onClose, interval, id }: AlertMessage) => {
    const [open, setOpen] = useState(false)
    const [time, setTime] = useState(interval / 1000)
    useEffect(() => {
        const int = setInterval(() => {
            if (time > 0) setTime((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(int)
    }, [time])

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(id)
        }, interval + 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [])
    useEffect(() => {
        setOpen(true)
        const timer = setTimeout(() => {
            setOpen(false)
        }, interval)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    const types: Record<TAlertType, string> = {
        SUCCESS: "bg-green-600 text-white border-green-600",
        WARNING: "bg-orange-600 text-white border-orange-600",
        ERROR: "bg-rose-600 text-white border-rose-600",
        INFO: "bg-blue-300 text-white border-blue-300",
        DEFAULT: "bg-gray-200 text-gray-900 border-gray-200",
    }

    const variants = {
        outlined: "!bg-white border text-black",
        // filled: " duration-150 opacity-80 hover:opacity-100",
        default: " duration-150 opacity-80 hover:opacity-100",
    }

    const iconsComponents: Record<TAlertType, any> = {
        SUCCESS: CheckCircleIcon,
        WARNING: ExclamationIcon,
        INFO: InformationCircleIcon,
        ERROR: ExclamationCircleIcon,
        DEFAULT: InformationCircleIcon,
    }

    const IconComponentType = iconsComponents[type!]

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
            <div className={clsx(types[type], "flex flex-col rounded-lg  p-4 text-sm  shadow-lg")}>
                <div className="flex items-center space-x-2">
                    <IconComponentType className="h-6 w-6" />
                    <span className="grow">{message}</span>
                    <button onClick={() => onClose(id)} className="flex items-center justify-center rounded-full ">
                        <XCircleIcon className="h-6 w-6 text-gray-900" />
                    </button>
                </div>
            </div>
        </Transition>
    )
})

AlertMessage.displayName = "AlertMessage"
