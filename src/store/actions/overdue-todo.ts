import { AnyAction } from 'redux';


export const OVERDUE_TODO = 'OVERDUE_TODO';

const overdueTodo = (todoId: number): AnyAction => {
  return {
    type: OVERDUE_TODO,
    payload: {
      todoId: todoId
    }
  };
};

export default overdueTodo;
