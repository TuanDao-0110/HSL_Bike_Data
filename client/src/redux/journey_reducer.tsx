import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../ultilities/Sources";
import { Journey_Type } from "../ultilities/types";
type JourneyType = {
  journeyArr: Journey_Type[];
  requestStatus: string;
};
const initialState: JourneyType = {
  journeyArr: [],
  requestStatus: "",
};
const setUpID = (arg: Journey_Type[]): Journey_Type[] => {
  let newArg: Journey_Type[] = [];
  for (let i = 0; i < arg.length; i++) {
    arg[i].id = i + 1;
    newArg.push(arg[i]);
  }
  return newArg;
};

export const fetchJourneyDataApi = createAsyncThunk("get/journey", async (page?: number | string): Promise<Journey_Type[]> => {
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
      .addCase(fetchJourneyDataApi.pending, (state, action) => {
        const { meta } = action;
        return { ...state, requestStatus: meta.requestStatus };
      })
      .addCase(fetchJourneyDataApi.fulfilled, (state, action) => {
        return { ...state, journeyArr: setUpID(action.payload), requestStatus: action.meta.requestStatus };
      });
  },
});

export default journeySlice.reducer;
