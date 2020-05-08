//Code that combines all the other states together. 
// all the reducers will come here

//just a function that combines the reducers
import { combineReducers } from "redux";

import  userReducer  from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// now it only has the user, it is going to be just a Giant Object. We may have other Reducers, like stockReducer, cartReducer
export default combineReducers({
    user: userReducer,
    cart: cartReducer
})