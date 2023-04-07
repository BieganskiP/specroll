import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: {
    isActive: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleMenu } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
