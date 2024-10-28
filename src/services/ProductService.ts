import { safeParse , number, parse, string, transform, pipe} from "valibot";
import { DraftProductSchema, Product, ProductSchema, ProductsSchema } from "../types"
import axios from "axios";
import { toBoolean } from "../helpers";

type ProductData = {
    [k: string] : FormDataEntryValue;
}

// POST - /api/products
export async function addProduct(data: ProductData) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name, 
            price: Number(data.price)
        })
        
        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url, {
                name: result.output.name, 
                price: result.output.price
            })
        } else {
            throw new Error("Invalid product data")
        }

    } catch (error) {
        console.log(error)
    }
}

// GET - /api/products
export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`
        const { data } = await axios.get(url)

        const result = safeParse(ProductsSchema, data.data)
        //console.log(result)

        if(result.success) {
            return result.output
        } else {
            throw new Error("Invalid product data")
        }
    } catch (error) {
        console.log(error)
    }
}

// GET - /api/products/:id
export async function getProductById(id: Product["id"]) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        const { data } = await axios.get(url)

        const result = safeParse(ProductSchema, data.data)
        //console.log(result)

        if(result.success) {
            return result.output
        } else {
            throw new Error("Invalid product data")
        }
    } catch (error) {
        console.log(error)
    }
}

// PUT - /api/products/:id
export async function updateProduct( data: ProductData, id: Product["id"]) {
    try {

        const NumberSchema = pipe(string(), transform(Number), number());

        const result = safeParse(ProductSchema, {
            id: id, 
            name: data.name, 
            price: parse(NumberSchema, data.price),
            availability: toBoolean(data.availability.toString())
        })
        
        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
            await axios.put(url, result.output)
        }

    } catch (error) {
        console.log(error)
    }
} 

// PATCH - /api/products/:id
export async function updateProductAvailability(id: Product["id"]) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.patch(url)
    } catch (error) {
        console.log(error)
    }
}

// DELETE - /api/products/:id
export async function deleteProduct(id: Product["id"]) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.delete(url)
    } catch (error) {
        console.log(error)
    }
}