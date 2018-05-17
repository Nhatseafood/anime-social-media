import { FETCH_POSTS } from '../actions/types';

const intialState = { 
    items: [],
    item: {},
    userEntry: '' 
}

export default function(state = intialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case "SUBMIT_ENTRY":
        return{
            ...state,
            userEntry: action.userEntry
        }          
        default: 
            return state
    }
}