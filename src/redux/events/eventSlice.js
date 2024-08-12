import { createSlice } from "@reduxjs/toolkit";
import { SET_REPEAT } from "./eventTypes";

const initialState = {
  repeat: {},
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setRepeat: (state, action) => {
      state.repeat = action.payload;
    },
  },
});

// Exporting actions
export const { setRepeat } = eventSlice.actions;

// Exporting the reducer
export default eventSlice.reducer;
