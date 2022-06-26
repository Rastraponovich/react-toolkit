import { LocationMarkerIcon, PhoneIcon, SearchIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="flex items-center bg-[#403C3B] py-6 pl-[100px] pr-[70px] text-white">
            <Link to="/" className="mr-[72px]">
                <h2 className="text-[25px] font-bold uppercase leading-[25px] tracking-[0.15em]">logos</h2>
            </Link>

            <label className="relative mr-[30px] flex grow items-center text-lg font-normal leading-5 text-white">
                <LocationMarkerIcon className="absolute h-[18px] w-[15px] translate-x-full text-white" />
                <input
                    type="text"
                    className="w-full rounded-[10px] bg-[#504B4A] py-4 px-12 placeholder:text-[#CFCFCF] "
                    placeholder="Введите адрес доставки"
                />
                <SearchIcon className="absolute right-5 h-[18px] w-[15px] text-white" />
            </label>
            <div className="flex grow items-center space-x-2.5">
                <PhoneIcon className="h-8 w-8 rounded-full bg-[#618967] p-2.5 text-white" />
                <div className="flex flex-col">
                    <span className="text-xs font-normal leading-5 text-[#CFCFCF]">Контакты:</span>
                    <span className="text-base font-bold leading-5">+7 (917) 510-57-59</span>
                </div>
            </div>

            <button className="flex items-center rounded-[10px] bg-gradient-to-tr from-[#618967] to-[#72A479] py-3.5 px-3.5 ">
                <span className="mr-5 text-sm font-semibold first-letter:uppercase">корзина</span>
                <span className="relative ml-3 h-6 w-6 rounded-full bg-white text-[#403C3B]  before:absolute before:-left-4 before:h-[100%] before:w-px  before:bg-white/30 before:content-['']">
                    4
                </span>
            </button>
        </header>
    )
}
