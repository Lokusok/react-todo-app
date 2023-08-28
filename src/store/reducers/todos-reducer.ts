import { Todo } from '../../types';

import { SET_TODOS } from '../actions/set-todos';
import { DELETE_TODO } from '../actions/delete-todo';
import { COMPLETE_TODO } from '../actions/complete-todo';
import { TOGGLE_UPDATE } from '../actions/toggle-update';


interface Action {
  type: string,
  payload: {
    todo: Todo,
    todos: Todo[],
    todoId: number,
    isUpdating: boolean
  }
}

interface InitState {
  isUpdating: boolean,
  data: Todo[]
}

const initialState: InitState = {
  isUpdating: false,
  data: []
};

const todosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_TODOS: {
      return {
        ...state,
        data: action.payload.todos
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.payload.todoId ? { ...todo, type: 'cancelled' } : todo
        )
      };
    }
    case COMPLETE_TODO: {
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.payload.todoId ? { ...todo, type: 'completed' } : todo
        )
      };
    }
    case TOGGLE_UPDATE: {
      return {
        ...state,
        isUpdating: action.payload.isUpdating
      }
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
