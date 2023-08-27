import { createStore, combineReducers } from 'redux';
import todosReducer from './reducers/todos-reducer';
import searchReducer from './reducers/search-reducer';


const reducers = combineReducers({
  todos: todosReducer,
  search: searchReducer,
});
const store = createStore(reducers);

export default store;