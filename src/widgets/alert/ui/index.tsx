import { useAppSelector } from "app/hooks"
import { AlertModel } from ".."
import { Transition } from "@headlessui/react"
import { Fragment } from "react"

export const Alert = () => {
    const opened = useAppSelector(AlertModel.selectors.useOpened)
    const message = useAppSelector(AlertModel.selectors.useMessage)
    const type = useAppSelector(AlertModel.selectors.useAlertType)

    return (
        <Transition
            as={Fragment}
            show={opened}
            enter="transform duration-300 opacity"
            enterFrom="translate-y-full opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transform duration-500 opacity"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-full opacity-0"
        >
            <div className="fixed bottom-8 left-8 flex h-[50px] w-[200px] flex-col rounded-lg bg-green-600 p-4 text-white shadow-lg">
                <span>{message}</span>
            </div>
        </Transition>
    )
}
