export const OVERDUE_TODO = 'OVERDUE_TODO';

const overdueTodo = (todoId: number): { type: string, payload: { todoId: number } } => {
  return {
    type: OVERDUE_TODO,
    payload: {
      todoId: todoId
    }
  };
};

export default overdueTodo;
