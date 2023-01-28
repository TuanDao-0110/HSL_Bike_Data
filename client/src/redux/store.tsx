import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import stationReducer from "./station_map_reducer";
import languageReducer from "./langague_reducer";
import journey_reducer from "./journey_reducer";
import station_reducer from "./station_reducer";
import set_row_reducers from "./set_row_reducers";

export const store = configureStore({
  reducer: {
    stationMap: stationReducer,
    language: languageReducer,
    journeys: journey_reducer,
    stations: station_reducer,
    setRow: set_row_reducers,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
