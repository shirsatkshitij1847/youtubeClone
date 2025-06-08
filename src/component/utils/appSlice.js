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
    CloseMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { ToggelMenu, CloseMenu } = appSlice.actions;
export const appSliceReducer = appSlice.reducer;
