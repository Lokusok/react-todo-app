import { AnyAction } from 'redux';


export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

const setActivePage = (activePage: number): AnyAction => {
  return {
    type: SET_ACTIVE_PAGE,
    payload: {
      activePage: activePage
    }
  };
};

export default setActivePage;
