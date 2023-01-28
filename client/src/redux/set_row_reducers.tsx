import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

export const setRowSlice = createSlice({
  name: "set_row",
  initialState,
  reducers: {
    setRows: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { setRows } = setRowSlice.actions;
export default setRowSlice.reducer;
