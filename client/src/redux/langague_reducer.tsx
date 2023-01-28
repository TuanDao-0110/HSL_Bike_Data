import { createSlice } from "@reduxjs/toolkit";
import { state_EN } from "./language/English";
import { state_FI } from "./language/Finnish";
import { state_SE } from "./language/Swedish";
import { Lang_Type } from "../ultilities/types";

const initialState: Lang_Type = {
  ...state_EN,
};

export const languageSlicer = createSlice({
  name: "language",
  initialState,
  reducers: {
    setEng: () => {
      return { ...state_EN };
    },
    setFin: () => {
      return { ...state_FI };
    },
    setSE: () => {
      return { ...state_SE };
    },
  },
});

export const { setEng, setFin, setSE } = languageSlicer.actions;
export default languageSlicer.reducer;
