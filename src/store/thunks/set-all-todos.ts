import { Dispatch } from 'redux';

import setAllTodosAC from "../actions/set-all-todos";
import todosApi from "../../api/todos";


const setAllTodos = () => {
  return (dispatch: Dispatch) => {
    todosApi.getAllTodos()
      .then((todos) => {
        dispatch(setAllTodosAC(todos));
      });
  };
};

export default setAllTodos;
