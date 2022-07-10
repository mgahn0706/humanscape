import { combineReducers } from "redux";
import recommendReducer from "./recommend";

const rootReducer = combineReducers({
  recommendReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
