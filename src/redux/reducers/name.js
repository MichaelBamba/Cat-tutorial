import { NAME } from "../name";

const initialState = {
  name: "stray",
};

const nameReducer = (state = initialState, name) => {
  // eslint-disable-next-line default-case
  switch (name.type) {
    case NAME: {
      return {
        ...state,
        name: { name },
      };
    }
  }
};

export default nameReducer;
