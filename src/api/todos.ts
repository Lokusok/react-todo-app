import { Todo, UserTodo } from '../types';
import axios from 'axios';




const ax = axios.create({
  baseURL: 'http://127.0.0.1:4000/'
})

const todosApi = {
  getTodosByType(type: string): Promise<Todo[]> {
    return ax.get(`tasks/${type}`)
      .then((res) => res.data);
  },

  setCompleted(id: number): Promise<object> {
    return ax.put(`complete/${id}`);
  },

  setCancelled(id: number): Promise<object> {
    return ax.put(`cancel/${id}`);
  },

  appendTodo(todo: UserTodo): Promise<object> {
    return ax.post('/tasks', {
      title: todo.title,
      description: todo.description,
      createdAt: todo.createdAt,
      expiredAt: todo.expiredAt,
      type: todo.type
    });
  },
};

export default todosApi;
