import { ACTION_NAME } from "../name";

const initialState = {
  activity: "napping",
};

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NAME: {
      return {
        ...state,
        name: { name },
      };
    }
  }
};

export default nameReducer;
