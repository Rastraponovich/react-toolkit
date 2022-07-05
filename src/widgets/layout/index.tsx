import { Outlet, useNavigate } from "react-router-dom"

import { Alerts } from "widgets/alert"
import { Footer } from "widgets/footer"
import { Header } from "widgets/header"

export const Layout = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />

            <main className="flex grow flex-col">
                <Outlet />
            </main>
            <Alerts />
            <Footer />
        </>
    )
}
