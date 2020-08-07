export const FETCH_USERS = "FETCH_USERS";
export const SET_USERS = "SET_USERS";
export const USERS_SET_PAGINATION = "USERS_SET_PAGINATION";

const INITIAL_STATE = {
  isLoading: false,
  usersList: [],
  fetchInfo: {
    page: 0,
  },
  pagination: {
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
        pagination: {
          currentPage: action.payload.fetchInfo.page,
        },
        isLoading: false,
      };
    case USERS_SET_PAGINATION:
      return {
        ...state,
        pagination: {
          currentPage: action.payload.page,
        },
      };
    default:
      return {
        ...state,
      };
  }
};
