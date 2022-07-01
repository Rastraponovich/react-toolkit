import clsx from "clsx"
import { useAppSelector } from "app/hooks"
import { selectors } from "../model"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { useState, useEffect, memo } from "react"
import { TCategory } from "../lib"

interface CategoryNavLinkProps extends TCategory {}

export const CategorySelector = () => {
    const categories = useAppSelector(selectors.useCategories)
    const location = useLocation()
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (location.state) {
            //@ts-ignore
            const current = categories.find((item) => location?.state?.id === item.id)
            if (current) setActive(current.id)
        }
    }, [location])

    return (
        <nav className=" relative flex w-full justify-center space-x-6 overflow-hidden border-b border-white/10 px-20 font-Gilroy   text-lg font-normal leading-[21px] text-[#CFCFCF]">
            {categories.map((category) => (
                <CategoryNavLink key={category.id} {...category} active={active === category.id} />
            ))}
        </nav>
    )
}
interface CategoryNavLinkProps extends TCategory {
    active: boolean
}

const CategoryNavLink = memo(({ name, id, active }: CategoryNavLinkProps) => {
    return (
        <Link
            to={`/#${name}`}
            state={{ id }}
            className={clsx(
                "shrink-0 py-[29px]",
                active && "!border-[#618967] font-medium text-white",
                "border-b-[3px] border-transparent duration-100 hover:text-white"
            )}
        >
            {name}
        </Link>
    )
})
CategoryNavLink.displayName = "CategoryNavLink"
