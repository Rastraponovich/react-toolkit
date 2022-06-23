import { useAppSelector } from "app/hooks"
import { CategoryModel } from "entities/categories"
import { TCategory } from "entities/categories/lib"
import { DishCard } from "entities/dishes"
import { useRef, useEffect, memo } from "react"

export function useHorizontalScroll() {
    const containerRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const el = containerRef.current
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) return
                if (
                    !(el.scrollLeft === 0 && e.deltaY < 0) &&
                    !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 && e.deltaY > 0)
                ) {
                    e.preventDefault()
                }
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth",
                })
            }

            el.addEventListener("wheel", onWheel)
            return () => el.removeEventListener("wheel", onWheel)
        }
    }, [])
    return containerRef
}

export const CategoryCarousel = () => {
    const categories = useAppSelector(CategoryModel.selectors.useCategories)

    return (
        <>
            {categories.map((category) => (
                <CategoryCarouselItem {...category} key={category.id} />
            ))}
        </>
    )
}
interface CategoryCarouselProps extends TCategory {}

const CategoryCarouselItem = memo(({ name, dishes }: CategoryCarouselProps) => {
    const containerRef = useHorizontalScroll()

    return (
        <div
            id={name}
            className=" relative flex flex-col space-y-[50px] overflow-hidden border-b border-b-white/20 py-[50px] text-white"
        >
            <h3 className="ml-[90px] flex text-[32px] font-bold uppercase leading-[39px] before:mr-5  before:border-l-4 before:border-[#618967] before:content-['']">
                {name}
            </h3>
            <div
                ref={containerRef}
                className="relative flex snap-x  snap-center gap-5 overflow-x-hidden scroll-smooth px-10 py-4"
            >
                {dishes.map((dish) => (
                    <DishCard key={dish.id} {...dish} />
                ))}
            </div>
        </div>
    )
})
CategoryCarouselItem.displayName = "CategoryCarouselItem"
