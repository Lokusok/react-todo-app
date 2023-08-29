import { AnyAction } from 'redux';


export const SET_SEARCH_QUERY: string = 'SET_SEARCH_QUERY';

const setSearchQuery = (query: string): AnyAction => {
  return {
    type: SET_SEARCH_QUERY,
    payload: {
      query: query
    }
  };
};

export default setSearchQuery;
