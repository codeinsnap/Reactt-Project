import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers , composeEnhancers());

export default store;