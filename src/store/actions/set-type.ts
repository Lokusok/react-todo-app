export const SET_TYPE: string = 'SET_TYPE';

const setType = (type: string): { type: string, payload: { activeType: string } } => {
  return {
    type: SET_TYPE,
    payload: {
      activeType: type
    }
  };
};

export default setType;
