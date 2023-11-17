import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./features/userinfo/UserInfoSlice";
import plansReducer from "./features/Plans/PlanSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    plans: plansReducer,
  },
});

export default store;
