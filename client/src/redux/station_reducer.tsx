import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../ultilities/Sources";
import { StationType } from "../ultilities/types";


const initialState: StationType[] = [
  {
    id: "1",
    stationID: "501",
    Nimi: "Hanasaari",
    Namn: "Hanaholmen",
    Name: "Hanasaari",
    Osoite: "Hanasaarenranta 1",
    Adress: "Hanaholmsstranden 1",
    Kaupunki: "Espoo",
    Stad: "Esbo",
    Operaattor: "CityBike Finland",
    Kapasiteet: "10",
    x: "24.840319",
    y: "60.16582",
  },
];

export const fetchStationDataAPI = createAsyncThunk("get/station", async (): Promise<StationType[]> => {
  try {
    const { data, status } = await axios({
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
    builder
    //   .addCase(fetchStationDataAPI.pending, (state, action) => {
    //   })
      .addCase(fetchStationDataAPI.fulfilled, (state, { payload }) => {

        return (state = payload);
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = stationSlicer.actions;

export default stationSlicer.reducer;
