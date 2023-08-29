import { State } from '../../types';

import { Dispatch, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import todosApi from '../../api/todos';
import toggleUpdate from '../actions/toggle-update';
import setGlobalTodos from './get-todos';


const setTypeTodo = (id: number, type: string) => {
  return (dispatch: Dispatch, getState: () => State) => {
    dispatch(toggleUpdate(true));

    const activeType = getState().todos.activeType;
    
    switch (type) {
      case 'completed': {
        todosApi.setCompleted(id).then(() => (dispatch as ThunkDispatch<State, unknown, AnyAction>)(setGlobalTodos(activeType)));
        break;
      }
      case 'cancelled': {
        todosApi.setCancelled(id).then(() => (dispatch as ThunkDispatch<State, unknown, AnyAction>)(setGlobalTodos(activeType)));
        break;
      }
      case 'overdue': {
        todosApi.setOverdue(id).then(() => (dispatch as ThunkDispatch<State, unknown, AnyAction>)(setGlobalTodos(activeType)));
        break;
      }
    }
  }
};

export default setTypeTodo;
