import { ShoppingCartIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { memo, useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

const categories = [
    { id: 1, name: " Холодные закуски", path: "/" },
    { id: 2, name: "Горячие закуски", path: "/" },
    { id: 3, name: " Мясные блюда", path: "/" },
    { id: 4, name: "Супы", path: "/" },
    { id: 5, name: "Рыбные блюда", path: "/" },
    { id: 6, name: "Гриль меню", path: "/" },
    { id: 7, name: " Фирменные блюда", path: "/" },
    { id: 8, name: " Напитки", path: "/" },
]

export const CategorySelector = () => {
    const [search, setSearch] = useSearchParams()
    const [active, setActive] = useState(0)

    useEffect(() => {
        const categoryId = search.get("category")

        if (categoryId) setActive(Number(categoryId))
    }, [search])

    return (
        <section>
            <nav className="relative flex space-x-6 overflow-x-auto border-b border-white/10 px-20   text-lg font-normal leading-[21px] text-[#CFCFCF]">
                {categories.map((category) => (
                    <CategoryNavLink active={active === category.id} key={category.id} {...category} />
                ))}
            </nav>
        </section>
    )
}

interface CategoryNavLinkProps {
    path: string
    name: string
    active: boolean
    id: number
}
const CategoryNavLink = ({ path, active, name, id }: CategoryNavLinkProps) => {
    return (
        <Link
            to={`/?category=${id}`}
            className={clsx("py-[29px]", active && "border-b-[3px]  border-[#618967] font-medium text-white")}
        >
            {name}
        </Link>
    )
}

const dishes = [
    {
        id: 1,
        title: "ягненок",
        weigth: "225 г",
        price: 560,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    },
    {
        id: 2,
        title: "индейка",
        weigth: "225 г",
        price: 560,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    },
    {
        id: 3,
        title: "гусь",
        weigth: "225 г",
        price: 560,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    },
    {
        id: 4,
        title: "утка",
        weigth: "225 г",
        price: 560,

        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    },
    {
        id: 5,
        title: "свинина",
        weigth: "225 г",
        price: 560,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    },
    {
        id: 6,
        title: "свинина",
        weigth: "225 г",
        price: 560,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    },
    {
        id: 7,
        title: "свинина",
        weigth: "225 г",
        price: 560,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    },
    {
        id: 8,
        title: "свинина",
        weigth: "225 г",
        price: 560,
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    },
]

interface CategoryCarouselProps {
    title: string
}

export const CategoryCarousel = memo(({ title }: CategoryCarouselProps) => {
    return (
        <div className=" flex flex-col space-y-[50px] border-b border-b-white/20 py-[50px] text-white">
            <h3 className="ml-[90px] flex text-[32px] font-bold uppercase leading-[39px] before:mr-5  before:border-l-4 before:border-[#618967] before:content-['']">
                {title}
            </h3>
            <div className=" relative flex  snap-x snap-center gap-5 overflow-x-auto scroll-smooth py-4">
                {dishes.map((dish) => (
                    <CategoryCard key={dish.id} {...dish} />
                ))}
            </div>
        </div>
    )
})
CategoryCarousel.displayName = "CategoryCarousel"

interface CategoryCardProps {
    title: string
    weigth: string
    description: string
    price: number
}
const CategoryCard = memo(({ title, weigth, description, price }: CategoryCardProps) => {
    return (
        <figure className="relative mt-1 flex w-[325px] shrink-0 snap-center flex-col rounded-[10px] bg-gradient-to-r from-[#494544] to-[#504B4A] pb-[18px]">
            <span className="text-bold absolute top-0 right-0 z-20 flex h-[50px] w-[50px] translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full bg-[#79B282] text-xl leading-6">
                5
            </span>

            <img
                src="/assets/dish1.jpg"
                alt="dish image"
                width={325}
                height={267}
                className="width-full rounded-t-[10px]"
            />
            <figcaption className="flex flex-col rounded-b-[10px] pt-3.5 pr-4 pl-5 pb-[18px]">
                <div className="mb-[5px] flex items-center justify-between">
                    <h4 className="text-[22px] font-bold leading-[27px] first-letter:uppercase">{title}</h4>
                    <span className="text-xs font-normal leading-[14px]">{weigth}</span>
                </div>
                <p className="text-[13px] font-normal leading-[17px] text-[#CFCFCF]">{description}</p>
            </figcaption>
            <div className="flex items-center justify-between pr-4 pl-5">
                <span className="text-xl font-semibold leading-6">{price} ₽</span>
                <button className="flex items-center space-x-[15px] rounded-[10px] bg-[#618967] py-3.5 px-[19px]">
                    <span className="first-letter:uppercase">в корзину</span>
                    <ShoppingCartIcon className="h-6 w-6" />
                </button>
            </div>
        </figure>
    )
})
CategoryCard.displayName = "CategoryCard"
