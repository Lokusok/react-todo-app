import { Dispatch as DispatchRedux } from 'redux';

import setTodos from "../actions/set-todos";
import toggleUpdate from '../actions/toggle-update';
import todosApi from "../../api/todos";


const setGlobalTodos = (type: string) => {
  return (dispatch: DispatchRedux) => {
    dispatch(toggleUpdate(true));

    todosApi.getTodosByType(type).then((todos) => {
      console.log(`now todos: `, todos);
      dispatch(setTodos(todos));
      dispatch(toggleUpdate(false));
    });
  }
};

export default setGlobalTodos;
