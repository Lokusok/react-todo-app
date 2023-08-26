export const COMPLETE_TODO = 'COMPLETE_TODO';

const completeTodo = (todoId: number): { type: string, payload: { todoId: number } } => {
  return {
    type: COMPLETE_TODO,
    payload: {
      todoId: todoId
    }
  };
};

export default completeTodo;
