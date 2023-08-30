import { UserTodo, State } from '../../types';

import { Dispatch } from 'redux';

import todosApi from '../../api/todos';

import setTodos from '../actions/set-todos';
import setMaxPage from '../actions/set-max-page';
import setActivePage from '../actions/set-active-page';


const addTodo = (todo: UserTodo) => {
  return (dispatch: Dispatch, getState: () => State) => {
    const maxPage = getState().todos.pages.max;

      todosApi.appendTodo({
        title: todo.title,
        description: todo.description,
        createdAt: todo.createdAt,
        expiredAt: todo.expiredAt,
        type: todo.type,
    }).then(() => {
      const activeType = getState().todos.activeType;

      todosApi.getTodosByType(activeType, maxPage)
        .then((data) => {
          console.log(data);
          dispatch(setTodos(data.todos));
          dispatch(setActivePage(data.maxPage));
          dispatch(setMaxPage(data.maxPage));
        });
    });
  };
};

export default addTodo;
