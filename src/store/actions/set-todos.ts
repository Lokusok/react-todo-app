import { Todo } from '../../types';

import { AnyAction } from 'redux';


export const SET_TODOS: string = 'SET_TODOS';

const setTodos = (todos: Todo[]): AnyAction => {
  return {
    type: SET_TODOS,
    payload: {
      todos: todos
    }
  }
};

export default setTodos;
