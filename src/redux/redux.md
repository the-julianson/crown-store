# Install the libraries
npm install or yarn add redux redux-logger redux-react

# Create a root-reducer.js file
this one will take all other reducers and combine them in a Giant Object using applyMiddleWare, createReducer and logger

import { combineReducers } from "redux";

import userReducer from './user/user.reducer';

// now it only has the user, it is going to be just a Giant Object. We may have other Reducers, like stockReducer, //// cartReducer
export default combineReducers({
    user: userReducer
})

# Create the specific reducers that we need.
We can order them in different folders. Inside the folder we will have the reducer and the action that triggers the reducer.

the user.reducer.jsx contains the reducer which is basically a function that contains a switch, if certain condition is met, then it takes the action, charge it with a payload and send it to the store for it to be used and rendered the new component. The default case of the switch is when nothing changes and then the default state is sent back (it could be the original one, or the one that was as state when the action was triggered)

// const PROVIDE_INITIAL_STATE = {
//     myState : "initial value"
// }


// const exampleReducer = (state = "PROVIDE_INITIAL_STATE", action) => {
//     switch (action.type) {
//         case "CASE_1":
//             return {
//                 ...state,
//                 myState: action.payload
//             }
//         default:
//             return state;
//     }

// }

// export default exampleReducer;

# Create the store
  