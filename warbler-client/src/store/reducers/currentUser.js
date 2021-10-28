import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
    isAuthenticated: false, // this will be true when user is logged in
    user: {} // all the user info when logged in
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                // true or false, are there keys or no keys in this object
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            };
        default:
            return state;
    };
};