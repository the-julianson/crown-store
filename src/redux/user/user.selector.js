import { createSelector } from "reselect";

const selectUser = state => state.user;

// first argument is the input selector (can be more than one)
// second argument is the function that gets the return of the input selector.
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.selectCurrentUser 
)