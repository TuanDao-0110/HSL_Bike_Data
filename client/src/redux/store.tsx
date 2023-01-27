import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "./station_map_reducer";
import languageReducer from "./langague_reducer";
import journey_reducer from "./journey_reducer";
import station_reducer from "./station_reducer";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    stationMap: stationReducer,
    language: languageReducer,
    journeys: journey_reducer,
    stations: station_reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
