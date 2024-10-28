import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Products, { loader as productsLoader, action as updateAvailabilityAction } from "./views/Products"
import NewProduct, { action as newProductAction} from "./views/NewProduct"
import EditProduct, { loader as editProductLoader, action as editProductAction} from "./views/EditProduct"
import { action as deleteProductAction } from "./components/ProductDetails"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <Products />,
                index: true,
                loader: productsLoader,
                action: updateAvailabilityAction
            }, 
            {
                path: "products/new", 
                element: <NewProduct />, 
                action: newProductAction
            }, 
            {
                path: "products/:id/edit", // ROA Pattern - Resource-Oriented Design
                element: <EditProduct />, 
                loader: editProductLoader,
                action: editProductAction
            }, 
            {
                path: "products/:id/delete", // ROA Pattern - Resource-Oriented Design
                action: deleteProductAction
            }
        ]
    }
])