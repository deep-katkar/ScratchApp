import { createSlice } from "@reduxjs/toolkit";
import {
  SET_ACTIVE_CHARACTER,
  ADD_CHARACTER,
  SET_ANGLE,
} from "./charActionsType";

const initialState = {
  characters: [{ id: "sprite0", angle: 0 }],
  active: "sprite0",
};

const charSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setActiveCharacter: (state, action) => {
      state.active = action.payload.id;
    },
    addCharacter: (state) => {
      state.characters.push({
        id: `sprite${state.characters.length}`,
        angle: 0,
      });
    },
    setAngle: (state, action) => {
      const character = state.characters.find(
        (character) => character.id === state.active
      );
      if (character) {
        character.angle = action.payload.angle;
      }
    },
  },
});

export const { setActiveCharacter, addCharacter, setAngle } = charSlice.actions;

export default charSlice.reducer;
