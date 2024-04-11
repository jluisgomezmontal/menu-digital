import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuLink: "/menu",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuLink: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.menuLink = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMenuLink } = menuSlice.actions;

export default menuSlice.reducer;
