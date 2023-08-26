export const DELETE_TODO = 'DELETE_TODO';

const deleteTodo = (todoId: number): { type: string, payload: { todoId: number } } => {
  return {
    type: DELETE_TODO,
    payload: {
      todoId: todoId
    }
  }
};

export default deleteTodo;
