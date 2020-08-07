export const FETCH_USERS = "FETCH_USERS";
export const SET_USERS = "SET_USERS";

const INITIAL_STATE = {
  isLoading: false,
  usersList: [],
  fetchInfo: {
    page: 0,
  },
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        isLoading: true,
      };
    case SET_USERS:
      const { usersList } = state;
      if (action.payload.usersList !== null) {
        usersList.push(action.payload.usersList);
      }
      return {
        ...state,
        ...action.payload,
        usersList,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
