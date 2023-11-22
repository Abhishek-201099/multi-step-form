import { createSlice } from "@reduxjs/toolkit";

const initialAddonState = {
  selectedAddons: [],
};

const addonSlice = createSlice({
  name: "addon",
  initialState: initialAddonState,
  reducers: {
    updateAddons(state, action) {
      // state.selectedAddons = [...state.selectedAddons, ...action.payload];
      state.selectedAddons = [...action.payload];
    },
  },
});

export const { updateAddons } = addonSlice.actions;

export default addonSlice.reducer;

export function getAddons(state) {
  return state.addons.selectedAddons;
}
