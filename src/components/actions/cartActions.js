import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_QUANTITY,
    SUB_QUANTITY,
    ADD_SHIPPING,
    SUB_SHIPPING 
} from "./types/types"

export const addToCart = (id) => {
    console.log("Added to cart");
    return {
        type: ADD_TO_CART,
        id: id
    }
}

export const removeItem = (id) => {
    console.log("Removed from cart");
    return {
        type: REMOVE_ITEM,
        id: id
    }
}

export const addQuantity = (id) => {
    console.log("Added");
    return {
        type: ADD_QUANTITY,
        id: id
    }
}

export const subtractQuantity = (id) => {
    console.log("subtracted");
    return {
        type: SUB_QUANTITY,
        id: id
    }
}