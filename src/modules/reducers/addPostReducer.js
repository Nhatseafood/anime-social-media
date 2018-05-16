import { POST_DATA } from '../actions/types';

const intialState = { 
    items: [],
    item: {} 
}

export default function(state = intialState, action) {
    switch (action.type) {
        case POST_DATA:
            return {
                ...state,
                items: action.payload
            }
        case SEARCH_GAMES:
            return {
                ...state,
                items: action.payload
            }      
        default: 
            return state
    }
}