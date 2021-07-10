import { combineReducers } from "redux";
import Reducer from "./movies/reducer";

const rootReducer = combineReducers({
  Movies: Reducer,
});

export default rootReducer;
