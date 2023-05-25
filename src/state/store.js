import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { recordReducer } from "./reducers/record.reducer.js";

const rootReducer = combineReducers({
  records: recordReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
