import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../ultilities/Sources";
import { Journey_Type } from "../ultilities/types";



const initialState: Journey_Type[] = [
  {
    id: 392,
    departureTime: "2021-07-31T23:20:14",
    returnTime: "2021-07-31T23:30:23",
    departureStationId: "076",
    departureStationName: "Olympiastadion",
    returnStationId: "111",
    returnStationName: "Esterinportti",
    coveredDistance: "1676",
    duration: "604",
  },
];
const setUpID = (arg: Journey_Type[]): Journey_Type[] => {
  let newArg: Journey_Type[] = [];
  for (let i = 0; i < arg.length; i++) {
    arg[i].id = i + 1;
    newArg.push(arg[i]);
  }
  return newArg;
};

export const fetchJourneyDataApi = createAsyncThunk("get/journey", async (page?: Number): Promise<Journey_Type[]> => {
  try {
    const { data, status } = await axios({
      method: "GET",
      url: BASE_URL + "journey" + `?page=${page}`,
    });
    return data.result;
  } catch (error) {
    if (error instanceof Error) {
    }
    return [];
  }
});

export const journeySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchJourneyDataApi.pending, (state, action) => {})
      .addCase(fetchJourneyDataApi.fulfilled, (state, action) => {
        return (state = setUpID(action.payload));
        // return (state = action.payload);
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = journeySlice.actions;

export default journeySlice.reducer;
