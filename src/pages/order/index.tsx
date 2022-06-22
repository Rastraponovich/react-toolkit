import { useAppSelector } from "app/hooks"
import { CategorySelector } from "entities/categories"
import { LineDish } from "entities/dishes"
import { OrderModel } from "features/order"
import { TotalInfo } from "features/order/total-info"

export const OrderPage = () => {
    const orders = useAppSelector(OrderModel.selectors.useOrder)
    return (
        <div className="flex grow flex-col bg-gradient-to-t from-[#211F20] to-[#44403F] pb-[90px] font-Gilroy">
            <CategorySelector />
            <section className="flex grow flex-col px-[172px]">
                <div className="flex flex-col divide-y rounded-[10px] bg-gradient-to-tr from-[#494544] to-[#504B4A]">
                    {orders.map((orderLine) => (
                        <LineDish key={orderLine.id} {...orderLine} />
                    ))}
                </div>
            </section>
            <TotalInfo />
        </div>
    )
}
