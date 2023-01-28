import React, { memo, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchJourneyDataApi } from "../redux/journey_reducer";
import Loading from "./Loading";
import { setRows } from "../redux/set_row_reducers";
const Journey_Table = () => {
  const journeyData = useSelector((state: RootState) => state.journeys);
  const { journeyArr, requestStatus } = journeyData;
  const { journey: tableJourneyLanguage } = useSelector((state: RootState) => state.language);
  const rowAmount = useSelector((state: RootState) => state.setRow);
  // const [page, SetPage] = useState<Number>(10);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (journeyArr.length === 0) {
      dispatch(fetchJourneyDataApi(1000));
    }
  }, []);

  const render = () => {
    if (requestStatus === "pending") {
      return <Loading />;
    }
    return (
      <DataGrid
        sx={{
          color: "#1C87C9",
          borderColor: "#1C87C9",
        }}
        rows={journeyArr}
        columns={tableJourneyLanguage.col}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    );
  };

  return (
    <Box sx={{ height: 600, width: "80%", margin: "0 0 10rem" }}>
      <div className="flex justify-center">
        <h1 className="text-4xl text-center my-5">{tableJourneyLanguage.header} </h1>
        <FormControl
          sx={{
            m: 2,
            color: "wheat",
            width: "10rem",
          }}
          variant="standard"
        >
          <InputLabel
            id="demo-customized-select-label"
            size="normal"
            sx={{
              textAlign: "center",
              width: "fit-content",
            }}
          >
            {tableJourneyLanguage.page}
          </InputLabel>
          <Select
            sx={{
              color: "#1C87C9",
            }}
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={rowAmount}
            onChange={(e) => {
              dispatch(setRows(e.target.value));
              dispatch(fetchJourneyDataApi(e.target.value));
            }}
          >
            <MenuItem value={"0"}>all</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"100"}>100</MenuItem>
            <MenuItem value={"1000"}>1000</MenuItem>
            <MenuItem value={"10000"}>10000</MenuItem>
            <MenuItem value={"100000"}>100000</MenuItem>
          </Select>
        </FormControl>
      </div>
      {render()}
    </Box>
  );
};

// export default Journey_Table;
export default Journey_Table;
