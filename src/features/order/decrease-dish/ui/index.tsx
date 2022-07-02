import { MinusIcon } from "@heroicons/react/outline"
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid"
import { TDish } from "entities/dishes/lib"
import { TOrderDishes } from "features/order/lib"
import { useDecreaseDish } from "features/order/model/actions"
import { memo } from "react"

interface DecreaseDishButtonProps {
    id: TDish["id"]
}
export const DecreaseDishButton = memo(({ id }: DecreaseDishButtonProps) => {
    const handleIncrement = useDecreaseDish(id)
    return (
        <button
            onClick={handleIncrement}
            className="rounded-[10px] bg-gradient-to-br from-[#618967]/60 to-[#72A479]/95 px-[22px] py-4 hover:shadow-[0px_5px_10px_rgba(114,163,121,0.7)] active:opacity-75"
        >
            <MinusIcon className="w-5" />
        </button>
    )
})

DecreaseDishButton.displayName = "DecreaseDishButton"
interface RoundedDecreaseDishButtonProps {
    id: TOrderDishes["id"]
}
export const RoundedDecreaseDishButton = memo(({ id }: RoundedDecreaseDishButtonProps) => {
    const handleClick = useDecreaseDish(id)

    return (
        <button onClick={handleClick}>
            <MinusCircleIcon className="h-[30px] w-[30px] rounded-full bg-white text-[#72A479]" />
        </button>
    )
})

RoundedDecreaseDishButton.displayName = "RoundedDecreaseDishButton"
