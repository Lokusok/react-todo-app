export const TOGGLE_UPDATE = 'TOGGLE_UPDATE';

const toggleUpdate = (isUpdating: boolean): { type: string, payload: { isUpdating: boolean } } => {
  return {
    type: TOGGLE_UPDATE,
    payload: {
      isUpdating: isUpdating
    }
  };
};

export default toggleUpdate;
