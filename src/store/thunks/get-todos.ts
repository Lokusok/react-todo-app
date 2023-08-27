import { Dispatch, SetStateAction } from 'react';
import { Dispatch as DispatchRedux } from 'redux';

import setTodos from "../actions/set-todos";
import todosApi from "../../api/todos";


const setGlobalTodos = (type: string, setShowLoader: Dispatch<SetStateAction<boolean>>) => {
  return (dispatch: DispatchRedux) => {
    setShowLoader(true);

    todosApi.getTodos(type).then((todos) => {
      dispatch(setTodos(todos));
      setShowLoader(false);
    });
  }
};

export default setGlobalTodos;
