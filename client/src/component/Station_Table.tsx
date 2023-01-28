import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { renderMap } from "../redux/station_map_reducer";
import { AppDispatch, RootState } from "../redux/store";
import { fetchStationDataAPI } from "../redux/station_reducer";
import Loading from "./Loading";

const Station_Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { station: tableStation_Data } = useSelector((state: RootState) => state.language);
  const stations = useSelector((state: RootState) => state.stations);

  useEffect(() => {
    dispatch(fetchStationDataAPI());
  }, []);
  const render = () => {
    if (stations.length === 0) {
      return <Loading />;
    }
    return (
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
    );
  };
  return (
    <Box sx={{ height: 600, width: "80%", margin: "0 0 10rem" }}>
      <h1 className="text-4xl text-center my-5">{tableStation_Data.header} </h1>
      {render()}
    </Box>
  );
};

export default Station_Table;
