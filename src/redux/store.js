//import the createstore

// 
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

// Redux persist
import { persistStore } from "redux-persist";

import rootReducer from './root-reducer';

// Setting the middleware
const middlewares = [logger];

//to create store: receives our rootReducer and the return value of applyMiddleware given the argument of the logger (inside the array middlewares)
// we could have just put the logger in "const store", but by nesting it inside and array then we can use array spread to pass every single array element, 
//so later if we want to modify the logger is all fine

//Create Store
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

//persistor (persisted version of our store)
export const persistor = persistStore(store);

export default {store, persistor};