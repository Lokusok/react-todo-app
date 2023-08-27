import { todos } from './mock';
import { Todo } from '../types';


const todosApi = {
  getTodos(type: string): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filterTodos = todos;

        if (type) {
          filterTodos = todos.filter((todo) => todo.type === type);
        }

        resolve(filterTodos);
      }, 500);
    });
  }
};

export default todosApi;
