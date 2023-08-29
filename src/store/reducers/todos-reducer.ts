import { Todo } from '../../types';

import { SET_TODOS } from '../actions/set-todos';
import { DELETE_TODO } from '../actions/delete-todo';
import { OVERDUE_TODO } from '../actions/overdue-todo';
import { COMPLETE_TODO } from '../actions/complete-todo';
import { TOGGLE_UPDATE } from '../actions/toggle-update';
import { SET_TYPE } from '../actions/set-type';
import { SET_ALL_TODOS } from '../actions/set-all-todos';

import { AnyAction } from 'redux';


interface InitState {
  isUpdating: boolean;
  activeType: 'overdue' | 'process' | 'completed' | 'cancelled' | '';
  allTodos: Todo[];
  data: Todo[];
}

const initialState: InitState = {
  isUpdating: false,
  activeType: '',
  allTodos: [],
  data: []
};

const todosReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_ALL_TODOS: {
      return {
        ...state,
        allTodos: action.payload.allTodos,
      }
    }
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
    case OVERDUE_TODO: {
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.payload.todoId ? { ...todo, type: 'overdue' } : todo
        )
      }
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
    case SET_TYPE: {
      return {
        ...state,
        activeType: action.payload.activeType
      }
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
