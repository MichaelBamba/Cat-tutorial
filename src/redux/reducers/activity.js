import { ACTION_SET_ACTIVITY } from "../actionTypes";

const initialState = {
  name: "Milo",
  activity: "napping",
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_ACTIVITY: {
      return {
        ...state,
        activity: "playing",
      };
    }
    default:
      return state;
  }
};

export default activityReducer;
