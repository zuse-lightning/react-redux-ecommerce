import { ADD_TO_CART } from "./types/types"

export const addToCart = (id) => {
    console.log("Added to cart");
    return {
        type: ADD_TO_CART,
        id: id
    }
}