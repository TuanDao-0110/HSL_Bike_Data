import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../ultilities/Sources";
import { StationType } from "../ultilities/types";

const initialState: StationType[] = [];

export const fetchStationDataAPI = createAsyncThunk("get/station", async (): Promise<StationType[]> => {
  try {
    const { data } = await axios({
      method: "GET",
      url: BASE_URL + "station",
    });
    return data.result;
  } catch (error) {
    if (error instanceof Error) {
    }
    return [];
  }
});

export const stationSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchStationDataAPI.fulfilled, (state, action) => {
      const { payload } = action;
      return (state = payload);
    });
  },
});

export default stationSlicer.reducer;
