import { createSlice } from "@reduxjs/toolkit";

const initialUserInfoState = {
  fullName: "",
  email: "",
  phoneNumber: "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: initialUserInfoState,
  reducers: {
    updateUserInfo(state, action) {
      state.fullName = action.payload.name;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});

export const { updateUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;

export function getUserInfo(state) {
  return state.userInfo;
}
