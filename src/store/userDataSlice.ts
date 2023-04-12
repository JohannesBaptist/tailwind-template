import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "@base/components/types/main";

const initialState: UserState = {
  e: "",
  data: {},
  loading: true,
  active: "",
  activities: [{activity: "Visit Paris", checked: false}, {activity: "Visit Amsterdam", checked: false}, {activity: "Go SkyDiving", checked: true} ]
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    fetchSuc(state, a) {
      state.data = a.payload;
      state.loading = false;
    },
    fetchFail(state, a) {
      state.e = a.payload;
      state.loading = false;
    },
    setUserData(state, a) {
      state.data.firstName = a.payload.firstName;
      state.data.secondName = a.payload.secondName;
      state.data.phone = a.payload.phone;
      state.data.email = a.payload.email;
      state.data.location = a.payload.location;
      state.data.postalCode = a.payload.postalCode
    },
    setActive(state, a) {
      state.active = a.payload
    }
  },
});

export const userDataReducer = userDataSlice.reducer

export const {fetchSuc, fetchFail, setUserData, setActive} = userDataSlice.actions

