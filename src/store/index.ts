import { createStore, combineReducers, applyMiddleware } from 'redux';
import todosReducer from './reducers/todos-reducer';
import searchReducer from './reducers/search-reducer';

import thunk from 'redux-thunk'


const reducers = combineReducers({
  todos: todosReducer,
  search: searchReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;