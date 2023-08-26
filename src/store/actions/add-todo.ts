import { Todo } from '../../types';


export const ADD_TODO: string = 'ADD_TODO';

const addTodo = (todo: Todo): { type: string, payload: { todo: Todo } } => {
  return {
    type: ADD_TODO,
    payload: {
      todo: todo
    }
  }
};

export default addTodo;
