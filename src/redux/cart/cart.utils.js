export const addItemToCart = (cartItems, cartItemToAdd) => {
    //Check existence of item
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);
    
    //If exists, add 1 to quantity. 
    if(existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};