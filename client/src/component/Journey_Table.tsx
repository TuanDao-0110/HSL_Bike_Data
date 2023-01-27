import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchJourneyDataApi } from "../redux/journey_reducer";
const Journey_Table = () => {
  const journeyData = useSelector((state: RootState) => state.journeys);
  const { journey: tableJourneyLanguage } = useSelector((state: RootState) => state.language);
  const [page, SetPage] = useState<Number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJourneyDataApi(0));
  }, []);
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
            value={page}
            onChange={(e) => {
              SetPage(e.target.value as Number);
              dispatch(fetchJourneyDataApi(e.target.value as Number));
            }}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </div>

      <DataGrid
        sx={{
          color: "#1C87C9",
          borderColor: "#1C87C9",
        }}
        rows={journeyData}
        columns={tableJourneyLanguage.col}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default Journey_Table;
