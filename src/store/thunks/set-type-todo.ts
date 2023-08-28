import { State } from '../../types';

import { ThunkDispatch } from 'redux-thunk';

import todosApi from '../../api/todos';
import toggleUpdate from '../actions/toggle-update';
import setGlobalTodos from './get-todos';


const setTypeTodo = (id: number, type: string, pageType: string) => {
  return (dispatch: ThunkDispatch<State, void, { type: string }>) => {
    dispatch(toggleUpdate(true));

    switch (type) {
      case 'completed': {
        todosApi.setCompleted(id).then(() => dispatch(setGlobalTodos(pageType)));
        break;
      }
      case 'cancelled': {
        todosApi.setCancelled(id).then(() => dispatch(setGlobalTodos(pageType)));
        break;
      }
    }
  }
};

export default setTypeTodo;
