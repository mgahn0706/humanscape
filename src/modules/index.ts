import { combineReducers } from "redux";
import recommendReducer from "./recommend";
import keywordReducer from "./keyword";

const rootReducer = combineReducers({
  recommendReducer,
  keywordReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
