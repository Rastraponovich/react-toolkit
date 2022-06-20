import { useAppDispatch, useAppSelector } from "app/hooks"
import { useCallback } from "react"
import { AlertModel } from "widgets/alert"
import { AlertMessage } from "../alert-message"

export const Alerts = () => {
    const messages = useAppSelector(AlertModel.selectors.useMessages)

    const dispatch = useAppDispatch()

    const handleClose = useCallback((id: string) => {
        dispatch(AlertModel.actions.hideAlert(id))
    }, [])

    return (
        <div className="fixed left-8 bottom-8 flex w-1/2 flex-col space-y-2">
            {messages.map((message) => (
                <AlertMessage {...message} key={message.id} interval={3000} onClose={handleClose} />
            ))}
        </div>
    )
}
