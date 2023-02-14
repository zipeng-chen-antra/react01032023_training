import { combineReducers } from "redux";
import { counterReducer } from "./slices/counterSlice";
import { themeReducer } from "./slices/themeSlice";

const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
})

export default rootReducer;