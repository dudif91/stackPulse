import { combineReducers } from "redux";
import { reducer as mainReducer } from "./Main";

const rootReducer = combineReducers({
    ipLocations: mainReducer
});

export default rootReducer;
