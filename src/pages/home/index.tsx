import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <section className="flex grow flex-col justify-between space-y-4 px-10 py-5 text-gray-900">
            <div className="flex space-x-4">
                <Link to="/posts" className="rounded-lg border p-2 text-xl font-bold">
                    список постов
                </Link>
                <Link to="/albums?page=1" className="rounded-lg border p-2 text-xl font-bold">
                    список альбомов
                </Link>
            </div>
        </section>
    )
}
