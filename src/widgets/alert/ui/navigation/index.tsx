import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="flex space-x-4">
            <Link to="/posts" className="rounded-lg border p-2 text-base hover:underline hover:underline-offset-2 ">
                список постов
            </Link>
            <Link
                to="/albums?page=1"
                className="rounded-lg border p-2 text-base hover:underline hover:underline-offset-2 "
            >
                список альбомов
            </Link>
        </div>
    )
}
