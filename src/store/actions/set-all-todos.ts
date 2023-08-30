import { Todo } from '../../types';

import { AnyAction } from 'redux';


export const SET_ALL_TODOS: string = 'SET_ALL_TODOS';

const setAllTodos = (todos: Todo[]): AnyAction => {
  return {
    type: SET_ALL_TODOS,
    payload: {
      allTodos: todos
    }
  };
};

export default setAllTodos;
