import { configureStore } from "@reduxjs/toolkit";
import {userDataReducer} from "./userDataSlice"
import {changeUserDataReducer} from "./changeDataSlice"
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
     userData: userDataReducer,
     changeUserData: changeUserDataReducer
    },
    middleware: [logger],
})