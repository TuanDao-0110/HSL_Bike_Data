import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { StationType } from "../ultilities/types";

const initialState: StationType = {
  id: "",
  stationID: "",
  Nimi: "",
  Namn: "",
  Name: "",
  Osoite: "",
  Adress: "",
  Kaupunki: "",
  Stad: "",
  Operaattor: "",
  Kapasiteet: "",
  x: "24.840319",
  y: "60.16582",
};
export const stationMapSlice = createSlice({
  name: "station",
  initialState,
  reducers: {
    renderMap: (state, action: PayloadAction<StationType>) => {
      return { ...action.payload };
    },
  },
});

export const { renderMap } = stationMapSlice.actions;
export default stationMapSlice.reducer;
