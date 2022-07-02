import { PlusIcon } from "@heroicons/react/outline"
import { PlusCircleIcon } from "@heroicons/react/solid"
import { TDish } from "entities/dishes/lib"
import { TOrderDishes } from "features/order/lib"
import { useDecreaseDish, useIncreaseDish } from "features/order/model/actions"
import { memo } from "react"

interface IncreaseDishButtonProps {
    id: TDish["id"]
}
export const IncreaseDishButton = memo(({ id }: IncreaseDishButtonProps) => {
    const handleIncrement = useIncreaseDish(id)
    return (
        <button
            onClick={handleIncrement}
            className="rounded-[10px] bg-gradient-to-br from-[#618967]/60 to-[#72A479]/95 px-[22px] py-4 hover:shadow-[0px_5px_10px_rgba(114,163,121,0.7)] active:opacity-75"
        >
            <PlusIcon className="w-5" />
        </button>
    )
})

IncreaseDishButton.displayName = "IncreaseDishButton"

interface RoundedIncreaseDishButtonProps {
    id: TOrderDishes["id"]
}
export const RoundedIncreaseDishButton = memo(({ id }: RoundedIncreaseDishButtonProps) => {
    const handleClick = useIncreaseDish(id)

    return (
        <button onClick={handleClick}>
            <PlusCircleIcon className="h-[30px] w-[30px] rounded-full bg-white text-[#72A479]" />
        </button>
    )
})

RoundedIncreaseDishButton.displayName = "RoundedIncreaseDishButton"
