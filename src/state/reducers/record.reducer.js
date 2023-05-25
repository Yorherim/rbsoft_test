const ADD_RECORD = "ADD_RECORD";

const defaultState = [];

export const recordReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_RECORD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const recordActions = {
  addRecord: (payload) => {
    return {
      type: ADD_RECORD,
      payload,
    };
  },
};
