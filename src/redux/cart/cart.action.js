import { CartActionTypes } from "./cart.actionTypes";

export const cartAddItem = item => {
    console.log('cartAddItem',item)
    return {
        type: CartActionTypes.CART_ADD_ITEM,
        payload: item
    }
}

export const cartRemoveItem = item => ({
    type: CartActionTypes.CART_REMOVE_ITEM,
    payload: item
})