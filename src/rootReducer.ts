import { combineReducers } from "redux";
import { reducer as mainReducer } from "./Main";

const rootReducer = combineReducers({
    ipLocation: mainReducer
});

export default rootReducer;
