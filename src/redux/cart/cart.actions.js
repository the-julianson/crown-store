import { cartActionTypes } from "./cart.types";

// payload is optative, we don't need it here. 
export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});
// Create action for add Item, like always: a type and a payload (optative)
export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});
