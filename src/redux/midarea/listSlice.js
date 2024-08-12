import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  midAreaLists: [
    {
      id: "midAreaList-0",
      comps: ["MOVE"],
    },
  ],
};

const listSlice = createSlice({
  name: "midarea",
  initialState,
  reducers: {
    setList: (state, action) => {
      let index = state.midAreaLists.findIndex(
        (x) => x.id === action.payload.id
      );
      if (index !== -1) {
        state.midAreaLists[index].comps = action.payload.list;
      }
    },
    addList: (state) => {
      const newList = {
        id: `midAreaList-${state.midAreaLists.length}`,
        comps: ["MOVE"],
      };
      state.midAreaLists.push(newList);
    },
    updateListAfterDrag: (state, action) => {
      state.midAreaLists = action.payload;
    },
  },
});

export const { setList, addList, updateListAfterDrag } = listSlice.actions;

export default listSlice.reducer;
