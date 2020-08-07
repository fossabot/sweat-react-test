import { FETCH_USERS, SET_USERS } from "../reducers/users.reducer";

export const fetchUsers = (payload) => ({
  type: FETCH_USERS,
  payload,
});

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});
