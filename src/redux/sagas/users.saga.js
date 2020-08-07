import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_USERS } from "../reducers/users.reducer";
import apiCall from "../../api";
import apiConfig from "../../config/api.config";
import { setUsers } from "../actions/users.actions";

function* getUsers({ payload }) {
  const paginationUrlVars = `?page=${payload.page + 1}&results=10&seed=abc`;
  try {
    const users = yield call(apiCall, "get", `${apiConfig.baseUrl}/api/${paginationUrlVars}`);
    yield put(
      setUsers({
        usersList: users.results,
        fetchInfo: users.info,
      }),
    );
  } catch (error) {
    yield put(
      setUsers({
        usersList: null,
        fetchInfo: {
          page: payload.page,
        },
        error,
      }),
    );
  }
}
export default function* usersSaga() {
  yield takeLatest(FETCH_USERS, getUsers);
}
