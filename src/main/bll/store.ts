import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./authReducer/authReducer";
import {passReducer} from "./passReducer/passReducer";
import {profileReducer} from "./profileReducer/profileReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    auth: authReducer,
    pass: passReducer,
    profile: profileReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;