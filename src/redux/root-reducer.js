//Code that combines all the other states together. 
// all the reducers will come here

//just a function that combines the reducers
import { combineReducers } from "redux";

// Redux-persist
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; //this is for localStorage, there is also other package for sessionStorage

import  userReducer  from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// whitelist: reducers we want to persist, in string form, user is being persisted by firebase. 
const persistConfig = {
    key: 'root',
    storage : storage,
    whitelist : [
        'cart'
    ] 
};

// now it only has the user and cart reducer, it is going to be just a Giant Object. We may have other Reducers, like stockReducer, cartReducer
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);


