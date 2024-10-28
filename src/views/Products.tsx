import { Link } from "react-router-dom"

export default function Products() {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Products</h2>
                <Link
                    to={"/products/new"}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                >
                    New Product
                </Link>
            </div>
        </>
    )
}
