import { AnyAction } from 'redux';


export const SET_MAX_PAGE = 'SET_MAX_PAGE';

const setMaxPage = (maxPage: number): AnyAction => {
  return {
    type: SET_MAX_PAGE,
    payload: {
      maxPage: maxPage
    }
  };
};

export default setMaxPage;
