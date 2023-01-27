import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { renderMap } from "../redux/station_map_reducer";
import { RootState } from "../redux/store";
import { fetchStationDataAPI } from "../redux/station_reducer";
import { createNextState } from "@reduxjs/toolkit";

const Station_Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { station: tableStation_Data } = useSelector((state: RootState) => state.language);
  const stations = useSelector((state: RootState) => state.stations);
  useEffect(() => {
    dispatch(fetchStationDataAPI());
  }, []);
  return (
    <Box sx={{ height: 600, width: "80%", marginBottom: "40px" }}>
      <h1 className="text-4xl text-center my-5">{tableStation_Data.header} </h1>
      <DataGrid
        sx={{
          color: "#1C87C9",
          borderColor: "#1C87C9",
        }}
        rows={stations}
        columns={tableStation_Data.col}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        onCellClick={(e) => {
          const { stationID } = e.row;
          dispatch(renderMap(e.row));
          navigate(`/station/${stationID}`);
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default Station_Table;
