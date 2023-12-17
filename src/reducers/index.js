import { combineReducers } from "redux";
import itemReducer from './item-reducer';

const rootReducer = combineReducers({
  items: itemReducer,
});

export default rootReducer;