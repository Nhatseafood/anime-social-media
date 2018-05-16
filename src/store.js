import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './modules/reducers/index';

const intialState = {};

const middleWare = [thunk];

// const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    intialState, 
    compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

export default store;