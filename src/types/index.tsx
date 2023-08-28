export type Todo = {
  id: number;
  title: string;
  description?: string;
  createdAt: number;
  expiredAt: number;
  type: 'overdue' | 'process' | 'completed' | 'cancelled';
}

export type UserTodo = {
  title: string;
  description: string;
  createdAt: number;
  expiredAt: number;
  type: 'overdue' | 'process' | 'completed' | 'cancelled';
}

export type State = {
  todos: {
    isUpdating: boolean;
    data: Todo[];
  },
  search: {
    query: string;
  }
}
