import { AnyAction } from 'redux';


export const SET_TYPE: string = 'SET_TYPE';

const setType = (type: string): AnyAction => {
  return {
    type: SET_TYPE,
    payload: {
      activeType: type
    }
  };
};

export default setType;
