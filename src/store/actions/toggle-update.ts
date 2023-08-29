import { AnyAction } from 'redux';


export const TOGGLE_UPDATE: string = 'TOGGLE_UPDATE';

const toggleUpdate = (isUpdating: boolean): AnyAction => {
  return {
    type: TOGGLE_UPDATE,
    payload: {
      isUpdating: isUpdating
    }
  };
};

export default toggleUpdate;
