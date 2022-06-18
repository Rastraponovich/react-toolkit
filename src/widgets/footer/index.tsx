import { ChevronUpIcon } from "@heroicons/react/solid"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="relative flex items-center bg-gradient-to-tl from-[#44403F] to-[#211F20] px-[155px] pt-[26px] pb-[30px] text-white">
            <button className="absolute left-10 top-[51px] rounded-full bg-white p-4">
                <ChevronUpIcon className="h-8 w-8 text-[#222021]" />
            </button>
            <div className="flex flex-col">
                <h3 className="mb-[15px] text-[25px] font-bold uppercase leading-[25px] tracking-[0.15em]">logos</h3>
                <span className="mb-2 text-sm leading-[14px] text-[#CFCFCF]">
                    © ООО СК «АПШЕРОН» <br />
                    Все права защищены. 2010-2020
                </span>
                <nav className="flex flex-col space-y-2 text-sm leading-4 underline underline-offset-2">
                    <Link to="/">
                        <a>Пользовательское соглашение</a>
                    </Link>
                    <Link to="/">
                        <a>Карта сайта</a>
                    </Link>
                    <Link to="/">
                        <a>Политика конфиденциальности</a>
                    </Link>
                </nav>
            </div>
            <nav className="ml-[86px] flex grow space-x-8 text-xl leading-6 text-white">
                <Link to="/">
                    <a>О ресторане</a>
                </Link>
                <Link to="/">
                    <a>Условия доставки</a>
                </Link>
                <Link to="/">
                    <a>Возврат товара</a>
                </Link>
                <Link to="/">
                    <a>Акции</a>
                </Link>
            </nav>
        </footer>
    )
}
