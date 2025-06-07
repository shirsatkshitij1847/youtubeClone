import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    ToggelMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { ToggelMenu } = appSlice.actions;
export const appSliceReducer = appSlice.reducer;
