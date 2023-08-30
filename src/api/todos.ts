import { Todo, UserTodo } from '../types';
import axios from 'axios';


const ax = axios.create({
  baseURL: 'http://127.0.0.1:4000/'
})

const todosApi = {
  getAllTodos(): Promise<Todo[]> {
    return ax.get('tasks')
      .then((res) => res.data);
  },

  getTodosByType(type: string, page: number | string | null | undefined): Promise<{ todos: Todo[], maxPage: number }> {
    return ax.get(`tasks/${type}/${page}`)
      .then((res) => res.data);
  },

  setCompleted(id: number): Promise<object> {
    return ax.put(`complete/${id}`);
  },

  setCancelled(id: number): Promise<object> {
    return ax.put(`cancel/${id}`);
  },

  setOverdue(id: number): Promise<object> {
    return ax.put(`overdue/${id}`);
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
