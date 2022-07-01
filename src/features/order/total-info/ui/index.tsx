import { useAppSelector } from "app/hooks"
import { useMemo } from "react"
import { selectors } from "../model"

export const TotalInfo = () => {
    const totalSum = useAppSelector(selectors.useOrderTotal)
    const minOrderSumm = useAppSelector(selectors.useMinOrderSum)

    const freeDelivery = useMemo(() => minOrderSumm - totalSum, [minOrderSumm, totalSum])
    return (
        <div className="flex items-center justify-between space-x-[305px] self-center rounded-[10px] bg-gradient-to-r from-[#494544] to-[#504B4A] pt-5 pr-10 pb-2.5 pl-7 text-white">
            <div className="flex flex-col text-xs font-medium leading-[14px]">
                <span className="mb-[5px] text-lg leading-[21px]">
                    итого: <b className="mr-2 text-[25px] font-bold leading-[30px] ">{totalSum}</b>
                </span>
                <span className="mb-[11px]">
                    до беспланой доставки нехватает:{" "}
                    <span className="text-[#72A479]">{freeDelivery > 0 ? freeDelivery : 0} Р</span>
                </span>
                <span className="font-normal">минимальная сумма заказа {minOrderSumm}</span>
            </div>
            <button className="rounded-[10px] bg-gradient-to-br from-[#618967] to-[#72A479] py-4 px-[50px] text-center text-sm font-bold leading-4 first-letter:uppercase">
                оформить заказ
            </button>
        </div>
    )
}
