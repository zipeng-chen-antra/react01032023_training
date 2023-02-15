import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import logger from "./middleware/logger";
import logger2 from "./middleware/logger2";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger, logger2,));
