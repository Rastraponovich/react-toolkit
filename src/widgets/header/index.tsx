import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="items-center bg-indigo-600 px-4 py-2 text-white">
            <Link to="/">
                <h2>JSon placeholder view</h2>
            </Link>
        </header>
    )
}
