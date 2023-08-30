import { Dispatch } from 'redux';

import setTodos from '../actions/set-todos';
import setMaxPage from '../actions/set-max-page';
import toggleUpdate from '../actions/toggle-update';
import todosApi from "../../api/todos";


const setGlobalTodos = (type: string, page: number | string | undefined) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleUpdate(true));

    todosApi.getTodosByType(type, page).then((data) => {
      dispatch(setTodos(data.todos));
      dispatch(setMaxPage(data.maxPage));
      dispatch(toggleUpdate(false));
    });
  }
};

export default setGlobalTodos;
