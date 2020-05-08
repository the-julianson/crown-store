import { cartActionTypes } from "./cart.types";

// payload is optative, we don't need it here. 
export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});
