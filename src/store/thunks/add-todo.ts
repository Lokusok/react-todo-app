import { UserTodo, State } from '../../types';

import { Dispatch } from 'redux';

import todosApi from '../../api/todos';
import setTodos from '../actions/set-todos';


const addTodo = (todo: UserTodo) => {
  return (dispatch: Dispatch, getState: () => State) => {
    todosApi.appendTodo({
      title: todo.title,
      description: todo.description,
      createdAt: todo.createdAt,
      expiredAt: todo.expiredAt,
      type: todo.type,
    }).then(() => {
      const activeType = getState().todos.activeType;

      todosApi.getTodosByType(activeType)
        .then((data) => {
          console.log(data);
          dispatch(setTodos(data));
        });
    });
  };
};

export default addTodo;
