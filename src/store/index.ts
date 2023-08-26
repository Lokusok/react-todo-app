import { createStore, combineReducers } from 'redux';
import todosReducer from './reducers/todos-reducer';


const reducers = combineReducers({
  todos: todosReducer
});
const store = createStore(reducers);

export default store;