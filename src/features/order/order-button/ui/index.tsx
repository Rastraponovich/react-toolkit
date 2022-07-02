import { useAppSelector } from "app/hooks"
import clsx from "clsx"
import { OrderModel } from "features/order"
import { useLocation, useNavigate } from "react-router-dom"

export const OrderButton = () => {
    const itemsCount = useAppSelector(OrderModel.selectors.useOrderQuantiyDishes)
    const navigate = useNavigate()
    const handleClick = () => navigate("/order")
    return (
        <button
            onClick={handleClick}
            className={clsx(
                "flex items-center rounded-[10px] bg-gradient-to-tr from-[#618967] to-[#72A479] py-3.5 px-3.5 ",
                itemsCount <= 0 && "text-center"
            )}
        >
            <span className={clsx(" text-sm font-semibold first-letter:uppercase", itemsCount > 0 && "mr-5")}>
                корзина
            </span>
            {itemsCount > 0 && (
                <span className=" relative ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#403C3B]  before:absolute before:-left-4 before:h-[100%] before:w-px  before:bg-white/30 before:content-['']">
                    {itemsCount}
                </span>
            )}
        </button>
    )
}
