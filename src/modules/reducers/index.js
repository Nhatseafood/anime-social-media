import { combineReducers } from 'redux';
import addPostReducer from './addPostReducer.js';

export default combineReducers({
    posts: addPostReducer
});