import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { StationType, fetchStationData } from "../ultilities/services";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { renderMap } from "../redux/station_map_reducer";
import { RootState } from "../redux/store";

const Station_Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [station, setStation] = useState<StationType[]>([
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
  ]);
  const { station: tableStation_Data } = useSelector((state: RootState) => state.languageSlicer);

  useEffect(() => {
    fetchStationData().then((data) => {
      setStation((prev) => {
        return data;
      });
    });
  }, []);
  return (
    <Box sx={{ height: 600, width: "80%", marginBottom: "40px" }}>
      <h1 className="text-4xl text-center my-5">{tableStation_Data.header} </h1>
      <DataGrid
        sx={{
          color: "#1C87C9",
          borderColor: "#1C87C9",
        }}
        rows={station}
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
