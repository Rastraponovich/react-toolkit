import { XCircleIcon } from "@heroicons/react/solid"
import { TDish } from "entities/dishes/lib"
import { memo } from "react"
import { useRemoveDishFromOrder } from "../model/actions"

interface RoundedRemoveLineDishButtonProps {
    id: TDish["id"]
}
export const RoundedRemoveLineDishButton = memo(({ id }: RoundedRemoveLineDishButtonProps) => {
    const handleClick = useRemoveDishFromOrder(id)
    return (
        <button onClick={handleClick}>
            <XCircleIcon className="h-[30px] w-[30px] rounded-full bg-white text-[#72A479]" />
        </button>
    )
})

RoundedRemoveLineDishButton.displayName = "RoundedRemoveLineDishButton"
