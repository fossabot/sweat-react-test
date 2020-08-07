import { all } from "redux-saga/effects";
import app from "./app.saga";
import users from "./users.saga"

export default function* rootSaga() {
  yield all([app(), users()]);
}
