import { formatCurrency } from "../helpers"
import { Product } from "../types"
//import { Link } from "react-router-dom"
import { ActionFunctionArgs, Form, useNavigate, redirect } from "react-router-dom"

type ProductDetailsProps = {
    product: Product
}

export async function action({params} : ActionFunctionArgs) {
    console.log(params)
    return redirect("/")
}

export default function ProductDetails({product} : ProductDetailsProps) {

    const navigate = useNavigate()

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800 text-center">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800 text-center">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800 text-center">
                {product.availability ? "Available" : "Unavailable"}
            </td>
            <td className="p-3 text-lg text-gray-800 text-center ">
                <div className="flex gap-2 justify-center">
                    {/*}
                    <Link
                        to={`/products/${product.id}/edit`}
                        className="bg-yellow-400 hover:bg-yellow-600 text-white text-xs font-bold py-2 px-4 rounded transition uppercase"
                    >Edit</Link>

                    <Link
                        to={`/products/${product.id}/delete`}
                        className="bg-red-400 hover:bg-red-600 text-white text-xs font-bold py-2 px-4 rounded transition uppercase"
                    >Delete</Link>
                    {*/}

                    <button
                        onClick={() => navigate(`/products/${product.id}/edit`, {
                        state: {
                            product: product
                        }
                    })}
                        className="bg-yellow-400 hover:bg-yellow-600 text-white text-xs font-bold py-2 px-4 rounded transition uppercase w-full"
                    >Edit</button>

                    <Form
                        method="POST"
                        className="w-full"
                        action={`/products/${product.id}/delete`}
                    >
                        <input type="submit" value={"Delete"} className="bg-red-400 hover:bg-red-600 text-white text-xs font-bold py-2 px-4 rounded transition uppercase w-full"/>
                    </Form>
                </div>
            </td>
        </tr> 
    )
}
