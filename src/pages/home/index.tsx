import { Link } from "react-router-dom"
import { CategoryCarousel, CategorySelector } from "./second"

const categories = ["ХОЛОДНЫЕ ЗАКУСКИ", "ГОРЯЧИЕ ЗАКУСКИ", "Мясные блюда"]

export const HomePage = () => {
    return (
        <section className="flex grow flex-col bg-gradient-to-t from-[#211F20] to-[#44403F]">
            <CategorySelector />
            {categories.map((category) => (
                <CategoryCarousel title={category} key={category} />
            ))}
        </section>
    )
}
