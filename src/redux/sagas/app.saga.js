import { takeLatest } from "redux-saga/effects";
import { go } from "connected-react-router";
import { NAVIGATE_TO } from "../reducers/app.reducer";

function* navigate({ payload }) {
  try {
    yield go(payload.route);
  } catch (error) {
    console.log("EXECUTION_ERROR: ", error);
  }
}
export default function* app() {
  yield takeLatest(NAVIGATE_TO, navigate);
}
