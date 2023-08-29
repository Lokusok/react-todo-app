import { SET_SEARCH_QUERY } from '../actions/set-search-query';
import { AnyAction } from 'redux';


interface InitData {
  query: string;
}

const initialState: InitData = {
  query: ''
};

const searchReducer = (state: InitData = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_SEARCH_QUERY: {
      return {
        ...state,
        query: action.payload.query
      }
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
