import { createSlice } from "@reduxjs/toolkit";

const initialSummaryState = {
  finalPlan: {},
  finalAddons: [],
};

const summarySlice = createSlice({
  name: "summary",
  initialState: initialSummaryState,
  reducers: {
    updateSummary(state, action) {
      state.finalPlan = action.payload.planData;
      state.finalAddons = action.payload.addonData;
    },
  },
});

export const { updateSummary } = summarySlice.actions;

export default summarySlice.reducer;

export function getSummary(state) {
  return state.summary;
}
