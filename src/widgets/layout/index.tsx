import { ArrowLeftIcon } from "@heroicons/react/solid"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Alerts } from "widgets/alert"
import { Footer } from "widgets/footer"
import { Header } from "widgets/header"

export const Layout = () => {
    const navigate = useNavigate()
    const handleBack = () => navigate(-1)
    return (
        <>
            <Header />
            <main className="flex grow flex-col font-sans">
                <button
                    onClick={handleBack}
                    className="m-4  flex items-center space-x-4 self-start rounded-lg border-2 px-4 py-2 text-base text-gray-900"
                >
                    <ArrowLeftIcon className="h-4 w-4" />
                    <span>назад</span>
                </button>
                <Outlet />
            </main>
            <Alerts />
            <Footer />
        </>
    )
}
