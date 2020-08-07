import { NAVIGATE_TO } from "../reducers/app.reducer";

export const navigateTo = (payload) => ({
  type: NAVIGATE_TO,
  payload,
});
