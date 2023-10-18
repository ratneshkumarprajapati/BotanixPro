import { combineReducers } from "redux";

import authReducer from "../Slices/authSlice";
import profileReducer from "../Slices/profileSlice"

const rootReducer=combineReducers({
    auth:authReducer,
    profile:profileReducer
})

export default rootReducer;