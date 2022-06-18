import { useAppSelector } from "app/hooks"
import { TDish } from "../lib"
import { memo } from "react"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { IncreaseDishButton, RoundedIncreaseDishButton } from "features/order/increase-dish"
import { DecreaseDishButton, RoundedDecreaseDishButton } from "features/order/decrease-dish"
import { OrderModel } from "features/order"
import { useAddToOrder } from "features/order/model/actions"
import { TOrderDishes } from "features/order/lib"
import { selectors } from "../model"
import { RoundedRemoveLineDishButton } from "features/order/remove-dish"

interface DishCardProps extends TDish {}
export const DishCard = memo(({ name, weigth, description, price, id }: DishCardProps) => {
    const quantity = useAppSelector(OrderModel.selectors.useOrderQuantiyDish(id))

    const handleAddToCart = useAddToOrder({ name, price, id })

    return (
        <figure className="relative mt-1 flex w-[325px] shrink-0 snap-center flex-col rounded-[10px] bg-gradient-to-r from-[#494544] to-[#504B4A] pb-[18px] duration-100 hover:shadow-[0px_30px_45px_rgba(43,40,40,0.6)]">
            {quantity! > 0 && (
                <span className="text-bold absolute top-0 right-0 z-20 flex h-[50px] w-[50px] translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full bg-[#79B282] text-xl leading-6">
                    {quantity}
                </span>
            )}

            <img
                src="/assets/dish1.jpg"
                alt="dish image"
                width={325}
                height={267}
                className="width-full rounded-t-[10px]"
            />
            <figcaption className="flex flex-col rounded-b-[10px] pt-3.5 pr-4 pl-5 pb-[18px]">
                <div className="mb-[5px] flex items-center justify-between">
                    <h4 className="text-[22px] font-bold leading-[27px] first-letter:uppercase">{name}</h4>
                    <span className="text-xs font-normal leading-[14px]">{weigth}</span>
                </div>
                <p className="text-[13px] font-normal leading-[17px] text-[#CFCFCF]">{description}</p>
            </figcaption>
            <div className="flex items-center justify-between pr-4 pl-5">
                {quantity! > 0 && <DecreaseDishButton id={id} />}
                <span className="text-xl font-semibold leading-6">{price} ₽</span>
                {quantity! > 0 ? (
                    <IncreaseDishButton id={id} />
                ) : (
                    <button
                        className="flex items-center space-x-[15px] rounded-[10px] bg-[#618967] py-3.5 px-[19px]"
                        onClick={handleAddToCart}
                    >
                        <span className="first-letter:uppercase">в корзину</span>
                        <ShoppingCartIcon className="h-6 w-6" />
                    </button>
                )}
            </div>
        </figure>
    )
})
DishCard.displayName = "DishCard"

interface LineDishProps extends TOrderDishes {}

export const LineDish = memo(({ dishId, quantity, price, id }: LineDishProps) => {
    const dish = useAppSelector(selectors.useGetDishById(dishId))

    return (
        <div className="flex items-center p-5 pl-10 text-white">
            <img src={dish!.image || ""} alt="dishImage" height={86} width={117} />
            <div className="mr-10 flex grow flex-col space-y-2">
                <h3> {dish!.name}</h3>
                <p> {dish!.description}</p>
            </div>
            <div className="flex grow items-center justify-between text-xl font-bold leading-6">
                <RoundedIncreaseDishButton id={dishId} />
                <span>{quantity}</span>
                <RoundedDecreaseDishButton id={dishId} />

                <span className="">{price * quantity} Р</span>
                <RoundedRemoveLineDishButton id={dishId} />
            </div>
        </div>
    )
})

LineDish.displayName = "LineDish"
