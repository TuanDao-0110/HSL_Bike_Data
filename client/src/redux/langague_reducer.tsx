import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { state_EN } from "./language/English";
import { state_FI } from "./language/Finnish";
import { state_SE } from "./language/Swedish";
import { Lang_Type } from "./redux_types/langague_types";

const initialState: Lang_Type = {
  ...state_EN,
};

export const languageSlicer = createSlice({
  name: "language",
  initialState,
  reducers: {
    setEng: (state) => {
      return { ...state_EN };
    },
    setFin: (state) => {
      return { ...state_FI };
    },
    setSE: (state) => {
      return { ...state_SE };
    },
  },
});

export const { setEng, setFin, setSE } = languageSlicer.actions;
export default languageSlicer.reducer;
