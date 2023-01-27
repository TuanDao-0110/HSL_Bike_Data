import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Journey_Type = {
  [index: string]: string | number;
  id: number;
  departureTime: string;
  departureStationId: string;
  departureStationName: string;
  returnStationId: string;
  returnStationName: string;
  coveredDistance: string;
  duration: string;
};
const initialState: Journey_Type = {
  id: 392,
  departureTime: "2021-07-31T23:20:14",
  returnTime: "2021-07-31T23:30:23",
  departureStationId: "076",
  departureStationName: "Olympiastadion",
  returnStationId: "111",
  returnStationName: "Esterinportti",
  coveredDistance: "1676",
  duration: "604",
};

export const journeySlice = createSlice({
  name: "station",
  initialState,
  reducers: {
    renderMap: (state, action: PayloadAction<Journey_Type>) => {
      return { ...action.payload };
    },
  },
  extraReducers(builder) {
      
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions,
export const { renderMap } = journeySlice.actions;
export default journeySlice.reducer;
