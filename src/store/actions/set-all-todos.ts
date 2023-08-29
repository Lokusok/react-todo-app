import { Todo } from '../../types';


export const SET_ALL_TODOS: string = 'SET_ALL_TODOS';

const setAllTodos = (todos: Todo[]) => {
  return {
    type: SET_ALL_TODOS,
    payload: {
      allTodos: todos
    }
  }
};

export default setAllTodos;
