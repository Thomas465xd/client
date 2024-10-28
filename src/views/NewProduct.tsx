import { Link, Form, useActionData, ActionFunctionArgs } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addProduct } from "../services/ProductService";

export async function action({request} : ActionFunctionArgs) {
    const formData = Object.fromEntries(await request.formData())

    let error = ''
    if(Object.values(formData).includes('')) {
        error = 'All fields are required'
    }

    if(error.length) {
        return error
    }

    addProduct(formData)

    return {}
}

export default function NewProduct() {

    const error = useActionData() as string

    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Register Products</h2>
                <Link
                    to={"/"}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                >
                    Return to products
                </Link>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form 
                className="mt-10" 
                method="POST"
            >
            
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="name"
                    >Product Name:</label>
                    <input 
                        id="name"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Name of the Product"
                        name="name"
                    />
                </div>
                <div className="mb-4">
                    <label 
                        className="text-gray-800"
                        htmlFor="price"
                    >Price:</label>
                    <input 
                        id="price"
                        type="number"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Product Price. Example: 200, 300"
                        name="price"
                    />
                </div>

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Register Producto"
                />
            </Form>
        </>
    )
}
