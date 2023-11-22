import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./features/userinfo/UserInfoSlice";
import plansReducer from "./features/plans/PlanSlice";
import addonsReducer from "./features/addons/AddonSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    plans: plansReducer,
    addons: addonsReducer,
  },
});

export default store;
