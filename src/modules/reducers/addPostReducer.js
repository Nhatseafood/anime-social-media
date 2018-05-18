import { FETCH_POSTS, SUBMIT_ENTRY } from '../actions/types';

const intialState = { 
    items: [],
    item: {},
    userEntry: ''
    
}

export default function(state = intialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                // ...state,
                // items: action.payload

                ...state.items,
                items: action.payload                     
               
            }
        case SUBMIT_ENTRY:
        return{
            ...state,
            userEntry: action.userEntry
        }          
        default: 
            return state
    }
}