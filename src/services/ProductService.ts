import { safeParse } from "valibot"
import { DraftProductSchema } from "../types"

type ProductData = {
    [k: string] : FormDataEntryValue;
}

export async function addProduct(formData: ProductData) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: formData.name, 
            price: Number(formData.price)
        })
        
        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products`
        } else {
            throw new Error("Invalid product data")
        }

    } catch (error) {
        console.log(error)
    }
}