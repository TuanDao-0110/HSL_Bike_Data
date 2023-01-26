import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StationType {
  [index: string]: string;
  id: string;
  stationID: string;
  Nimi: string;
  Namn: string;
  Name: string;
  Osoite: string;
  Adress: string;
  Kaupunki: string;
  Stad: string;
  Operaattor: string;
  Kapasiteet: string;
  x: string;
  y: string;
}
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
  name: "counter",
  initialState,
  reducers: {
    renderMap: (state, action: PayloadAction<StationType>) => {
      return { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions,
export const { renderMap } = stationMapSlice.actions;
export default stationMapSlice.reducer;
