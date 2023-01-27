import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "./station_map_reducer";
import languageSlicer from "./langague_reducer";
export const store = configureStore({
  reducer: {
    stationReducer,
    languageSlicer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
