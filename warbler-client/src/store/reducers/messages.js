import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";


const message = (state = [], action) => {
    switch (action.type) {
        case LOAD_MESSAGES:
            return [...action.messages];
        case REMOVE_MESSAGE:
            return state.filter(message => message._id !== action.id); // returns all messages except for the removed message
        default:
            return state;
    };
};

export default message;