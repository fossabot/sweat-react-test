import { FETCH_USERS, SET_USERS, USERS_SET_PAGINATION } from "../reducers/users.reducer";

export const fetchUsers = (payload) => ({
  type: FETCH_USERS,
  payload,
});

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});

export const setPagination = (payload) => ({
  type: USERS_SET_PAGINATION,
  payload,
});
