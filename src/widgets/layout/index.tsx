import { ArrowLeftIcon } from "@heroicons/react/solid"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
<<<<<<< HEAD
<<<<<<< HEAD
import { Alerts, Navbar } from "widgets/alert"
=======
import { Alerts } from "widgets/alert"
>>>>>>> 1192a4b (some hover animation)
=======
import { Alerts, Navbar } from "widgets/alert"
>>>>>>> f9f63aa (some ui fixes)
import { Footer } from "widgets/footer"
import { Header } from "widgets/header"

export const Layout = () => {
    const navigate = useNavigate()
    const handleBack = () => navigate(-1)
    return (
        <>
            <Header />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f9f63aa (some ui fixes)
            <main className="flex grow flex-col bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
                <div className="flex items-center justify-between px-10 py-4">
                    <Navbar />
                    <button
                        onClick={handleBack}
                        className=" flex items-center space-x-4 self-start rounded-lg border-2 px-4 py-2 text-base text-gray-900"
                    >
                        <ArrowLeftIcon className="h-4 w-4" />
                        <span>назад</span>
                    </button>
                </div>

<<<<<<< HEAD
=======
            <main className="flex grow flex-col font-sans">
                <button
                    onClick={handleBack}
                    className="m-4  flex items-center space-x-4 self-start rounded-lg border-2 px-4 py-2 text-base text-gray-900"
                >
                    <ArrowLeftIcon className="h-4 w-4" />
                    <span>назад</span>
                </button>
>>>>>>> 1192a4b (some hover animation)
=======
>>>>>>> f9f63aa (some ui fixes)
                <Outlet />
            </main>
            <Alerts />
            <Footer />
        </>
    )
}
