import { HomePage } from "pages/home"
import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { Layout } from "widgets/layout"

const OrderPage = lazy(() => import("pages/order").then((module) => ({ default: module.OrderPage })))

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="/order"
                    element={
                        <Suspense fallback={<p> Loading...</p>}>
                            <OrderPage />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    )
}
