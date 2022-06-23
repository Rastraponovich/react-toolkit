import { HomePage } from "pages/home"
import { lazy, Suspense } from "react"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { Layout } from "widgets/layout"

const AlbumPage = lazy(() => import("pages/albums/album").then((module) => ({ default: module.AlbumPage })))
const UserPage = lazy(() => import("pages/users/id").then((module) => ({ default: module.UserPage })))
const PostsPage = lazy(() => import("pages/posts").then((module) => ({ default: module.PostsPage })))
const PostPage = lazy(() => import("pages/posts/id").then((module) => ({ default: module.PostPage })))

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />

                <Route
                    path="albums/:id"
                    element={
                        <Suspense fallback={<p> Loading...</p>}>
                            <AlbumPage />
                        </Suspense>
                    }
                />
                <Route
                    path="users/:id"
                    element={
                        <Suspense fallback={<p> Loading...</p>}>
                            <UserPage />
                        </Suspense>
                    }
                />

                <Route path="posts">
                    <Route
                        index
                        element={
                            <Suspense fallback={<p> Loading...</p>}>
                                <PostsPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path=":id"
                        element={
                            <Suspense fallback={<p> Loading...</p>}>
                                <PostPage />
                            </Suspense>
                        }
                    />
                </Route>
            </Route>
            {/* <Route path="booking" element={<PrivateOutlet />}>
                    <Route index element={<BookingPage />} />
                    <Route path="scheduller" element={<SchedullerPage />} />
                    <Route path="add" element={<AddReservePage />} />
                </Route>
                <Route
                    path="profile"
                    element={
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    }
                />

                <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="auth" element={<AuthPage />} /> */}
        </Routes>
    )
}

{
    /* const PrivateOutlet = () => {
    const isAuth = authModel.selectors.useIsAuth()

    return isAuth ? <Outlet /> : <Navigate to="/auth" />
}
interface PrivateRouteProps {
    children: JSX.Element
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuth = authModel.selectors.useIsAuth()

    if (!isAuth) return <Navigate to="/auth" replace />
    return children
} */
}
