import { Todo } from '../../types';
import { ADD_TODO } from '../actions/add-todo';
import { SET_TODOS } from '../actions/set-todos';
import { DELETE_TODO } from '../actions/delete-todo';
import { COMPLETE_TODO } from '../actions/complete-todo';


interface Action {
  type: string,
  payload: {
    todo: Todo,
    todos: Todo[],
    todoId: number
  }
}

const initialState: Todo[] = [];

const todosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO: {
      return state.concat(action.payload.todo);
    }
    case SET_TODOS: {
      return action.payload.todos;
    }
    case DELETE_TODO: {
      return state.map((todo) => 
        todo.id === action.payload.todoId ? { ...todo, type: 'cancelled' } : todo
      );
    }
    case COMPLETE_TODO: {
      return state.map((todo) => 
        todo.id === action.payload.todoId ? { ...todo, type: 'completed' } : todo
      );
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
