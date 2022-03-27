import { combineReducers } from "redux";
import currentPageReducer from "./currentPageReducer";
import numberOfPagesReducer from "./numberOfPagesReducer";
import recordsPerPageReducer from "./recordsPerPageReducer";

const reducers = combineReducers({
    currentPage: currentPageReducer,
    recordsPerPage: recordsPerPageReducer,
    numberOfPages: numberOfPagesReducer
});

export default reducers;