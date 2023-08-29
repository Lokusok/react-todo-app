import { Todo } from '../../types';

import { SET_TODOS } from '../actions/set-todos';
import { OVERDUE_TODO } from '../actions/overdue-todo';
import { TOGGLE_UPDATE } from '../actions/toggle-update';
import { SET_TYPE } from '../actions/set-type';
import { SET_ALL_TODOS } from '../actions/set-all-todos';
import { SET_ACTIVE_PAGE } from '../actions/set-active-page';
import { SET_MAX_PAGE } from '../actions/set-max-page';

import { AnyAction } from 'redux';


interface InitState {
  isUpdating: boolean;
  activeType: 'overdue' | 'process' | 'completed' | 'cancelled' | '';
  pages: {
    active: number;
    max: number | null;
  }
  allTodos: Todo[];
  data: Todo[];
}

const initialState: InitState = {
  isUpdating: false,
  activeType: '',
  pages: {
    active: 1,
    max: null,
  },
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
    case OVERDUE_TODO: {
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.payload.todoId ? { ...todo, type: 'overdue' } : todo
        )
      }
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
    case SET_ACTIVE_PAGE: {
      return {
        ...state,
        pages: {
          ...state.pages,
          active: action.payload.activePage
        }
      }
    }
    case SET_MAX_PAGE: {
      return {
        ...state,
        pages: {
          ...state.pages,
          max: action.payload.maxPage
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
