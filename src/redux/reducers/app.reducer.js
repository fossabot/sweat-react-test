export const NAVIGATE_TO = "NAVIGATE_TO";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVIGATE_TO:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
