import { Todo } from '../../types';


export const SET_TODOS: string = 'SET_TODOS';

const setTodos = (todos: Todo[]): { type: string, payload: { todos: Todo[] } } => {
  return {
    type: SET_TODOS,
    payload: {
      todos: todos
    }
  }
};

export default setTodos;
