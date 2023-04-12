import { createSlice } from "@reduxjs/toolkit";
import { changeUserState } from "@base/components/types/main";

const initialState: changeUserState = {
};

const changeUserDataSlice = createSlice({
  name: "changeUserData",
  initialState,
  reducers: {
    changeFirstName(state, a) {
        state.firstName = a.payload
    },
    changeSecondName(state, a) {
        state.secondName = a.payload
    },
    changeEmail(state, a) {
        state.email = a.payload
    },
    changePhone(state, a) {
        state.phone = a.payload
    },
    changePostalCode(state, a) {
        state.postalCode = a.payload
    },
    changeLocation(state, a) {
        state.location = a.payload
    },
    changeAll(state , a) {
    state.firstName = a.payload.firstName;
    state.secondName = a.payload.secondName;
    state.phone = a.payload.phone;
    state.email = a.payload.email;
    state.location = a.payload.location;
    state.postalCode = a.payload.postalCode
    }
  },
});

export const changeUserDataReducer = changeUserDataSlice.reducer

export const { changeEmail, changeFirstName, changeLocation, changePhone, changePostalCode, changeSecondName, changeAll} = changeUserDataSlice.actions