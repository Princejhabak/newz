import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import thunk from 'redux-thunk'
import { 
    articleListReducer,
    languageReducer 
} from './reducers/articleReducer'

const reducer = combineReducers({
    articleList: articleListReducer,
    language: languageReducer
})

const initialState = {
}

const middleware = [thunk]

// const makeStore  = () => createStore(
//   reducer,
//   initialState,
//   applyMiddleware(...middleware)
// );

const store  =  createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;

// export const wrapper = createWrapper(makeStore, {debug: true});