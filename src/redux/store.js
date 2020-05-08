//import the createstore

// 
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// Setting the middleware
const middlewares = [logger];

//to create store: receives our rootReducer and the return value of applyMiddleware given the argument of the logger (inside the array middlewares)
// we could have just put the logger in "const store", but by nesting it inside and array then we can use array spread to pass every single array element, 
//so later if we want to modify the logger is all fine

//Create Store
const store = createStore(rootReducer, applyMiddleware(...middlewares))
export default store;