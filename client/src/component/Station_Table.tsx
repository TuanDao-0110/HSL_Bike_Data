import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { StationType, fetchStationData } from "../ultilities/services";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { renderMap } from "../redux/station_map_reducer";
const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 90 },
  {
    field: "stationID",
    headerName: "stationID",
    width: 150,
    editable: true,
  },
  {
    field: "Nimi",
    headerName: "Nimi",
    width: 150,
    editable: true,
  },
  {
    field: "Osoite",
    headerName: "Address",
    width: 150,
    editable: true,
  },
  {
    field: "Operaattor",
    headerName: "Operaattor",
    width: 150,
    editable: true,
  },
  {
    field: "Kapasiteet",
    headerName: "Kapasiteet",
    width: 150,
    editable: true,
  },
  {
    field: "x",
    headerName: "x",
    width: 100,
    editable: true,
  },
  {
    field: "y",
    headerName: "y",
    width: 100,
    // editable: true,
  },
];

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
  useEffect(() => {
    fetchStationData().then((data) => {
      setStation((prev) => {
        return data;
      });
    });
  }, []);
  return (
    <Box sx={{ height: 600, width: "80%", marginBottom: "40px" }}>
      <h1 className="text-4xl text-center my-5">Table station </h1>
      <DataGrid
        sx={{
          color: "#C76E4C",
          borderColor: "red",
        }}
        rows={station}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection

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
