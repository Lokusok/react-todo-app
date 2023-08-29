export const SET_SEARCH_QUERY: string = 'SET_SEARCH_QUERY';

const setSearchQuery = (query: string): { type: string, payload: { query: string } } => {
  return {
    type: SET_SEARCH_QUERY,
    payload: {
      query: query
    }
  };
};

export default setSearchQuery;
