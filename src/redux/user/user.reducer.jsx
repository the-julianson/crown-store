// jsx to say it is a reducer, in this case just for users
// this  is an action
// {
//     type:,
//     payload: 
// }
// state is the current state, action is the thing we wanna trigger (for example: update, delete an user)
// we define a initial state and pass it as a default value to the reducer function 
// in case nothing happens, amd default case is returned, it will take this initial state. 

const INITIAL_STATE = {
    currentUser : null
};

//we have yet to determine what SET_CURRENT_USER is >>>
// At the beginning we have to set up an initial state otherwhise Redux doesnt know which is the initial state

const userReducer = (state = INITIAL_STATE,action) => {
    switch (action.type){
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            // if non of the actions match, we want to return the state
            return state;
    }
}

export default userReducer;

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