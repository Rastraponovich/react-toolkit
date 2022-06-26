import { Link } from "react-router-dom"
import { CategoryCarousel, CategorySelector } from "./second"

const categories = ["ХОЛОДНЫЕ ЗАКУСКИ", "ГОРЯЧИЕ ЗАКУСКИ", "Мясные блюда"]

export const HomePage = () => {
    return (
        <>
            <section className="flex grow flex-col bg-gradient-to-t from-[#211F20] to-[#44403F]">
                <CategorySelector />
                {categories.map((category) => (
                    <CategoryCarousel title={category} key={category} />
                ))}
            </section>
            <section className="relative flex flex-col bg-hero bg-cover bg-no-repeat px-[100px] pt-[72px] text-white">
                <div className="absolute inset-0 z-10  bg-gradient-to-r from-[#211F20] to-transparent"></div>
                <div className="z-30 mb-[137px] flex rotate-[-8.37deg] flex-col space-y-[33px] ">
                    <h2 className="z-30  max-w-[613px] text-[67px] uppercase leading-[73px]">
                        Доставка ВКУСНЕЙШИХ БЛЮД за 60 минут
                    </h2>
                    <span className="z-30  text-[25px] uppercase italic leading-[27px]">Ещё не пробовал?</span>
                </div>
            </section>
            <section className="flex grow flex-col justify-between space-y-4 px-10 py-5 text-gray-900"></section>
        </>
    )
}
