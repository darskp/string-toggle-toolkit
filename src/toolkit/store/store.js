import { configureStore,combineReducers} from "@reduxjs/toolkit";
import rootreducer from "../reduce/reducer";

// let rootreducer=combineReducers(changeString)
let store=configureStore({reducer:rootreducer})
export default store;
