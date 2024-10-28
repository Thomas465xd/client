import { formatCurrency } from "../helpers"
import { deleteProduct } from "../services/ProductService"
import { Product } from "../types"
//import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { ActionFunctionArgs, Form, useNavigate, redirect, useFetcher } from "react-router-dom"

type ProductDetailsProps = {
    product: Product
}

export async function action({params} : ActionFunctionArgs) {
    if(params.id !== undefined) {
        await deleteProduct(+params.id)

        return redirect("/")
    }

}

export default function ProductDetails({product} : ProductDetailsProps) {

    const fetcher = useFetcher()
    const navigate = useNavigate()

    const onDelete = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });
    
        if (result.isConfirmed) {
            try {
                await deleteProduct(product.id); // Calls the delete API
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                navigate("/"); // Redirects to the homepage or desired route
            } catch (error) {
                Swal.fire("Error", "There was an issue deleting the product.", "error");
            }
        }
    };
    
    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800 text-center">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800 text-center">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800 text-center">
                <fetcher.Form method="POST">
                    <button 
                        type="submit" 
                        name="id"
                        value={product.id} 
                        className={`${product.availability ? 'text-black' : 'text-red-600'} 
                        rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer hover:bg-gray-200 transition`}
                    >
                        {product.availability ? "Available" : "Unavailable"}
                    </button>
                </fetcher.Form>
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
                        onSubmit={ onDelete }
                    >
                        <input type="submit" value="Delete" className="bg-red-400 hover:bg-red-600 text-white text-xs font-bold py-2 px-4 rounded transition uppercase w-full"/>
                    </Form>
                </div>
            </td>
        </tr> 
    )
}
