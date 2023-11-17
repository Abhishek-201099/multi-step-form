import { createSlice } from "@reduxjs/toolkit";

const initialPlanState = {
  selectedPlan: {},
};

const planSlice = createSlice({
  name: "plans",
  initialState: initialPlanState,
  reducers: {
    updateSelectedPlan(state, action) {
      state.selectedPlan.type = action.payload.type;
      state.selectedPlan.planPrice = action.payload.planPrice;
    },
  },
});

export const { updateSelectedPlan } = planSlice.actions;

export default planSlice.reducer;

export function getSelectedPlan(state) {
  return state.plans.selectedPlan;
}
