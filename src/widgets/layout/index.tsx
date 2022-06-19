import { Outlet } from "react-router-dom"
import { Alert } from "widgets/alert"
import { Footer } from "widgets/footer"
import { Header } from "widgets/header"

export const Layout = () => {
    return (
        <>
            <Header />
            <main className="grow">
                <Outlet />
            </main>
            <Alert />
            <Footer />
        </>
    )
}
