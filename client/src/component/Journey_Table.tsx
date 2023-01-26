import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { fetchJourneyData, Journey_Type } from "../ultilities/services";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 90 },

  {
    field: "departureStationName",
    headerName: "departure Station Name",
    width: 250,
    editable: true,
  },
  {
    field: "returnStationName",
    headerName: "return Station Name",
    width: 250,
    editable: true,
  },
  {
    field: "coveredDistance",
    headerName: "covered Distance (m)",
    width: 150,
    editable: true,
  },
  {
    field: "duration",
    headerName: "duration (s)",
    width: 150,
    editable: true,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const Journey_Table = () => {
  const [journey, setJourney] = React.useState<Journey_Type[]>([
    {
      id: 392,
      departureTime: "2021-07-31T23:20:14",
      returnTime: "2021-07-31T23:30:23",
      departureStationId: "076",
      departureStationName: "Olympiastadion",
      returnStationId: "111",
      returnStationName: "Esterinportti",
      coveredDistance: "1676",
      duration: "604",
    },
  ]);
  const [page, SetPage] = useState<Number>(0);
  useEffect(() => {
    fetchJourneyData().then((data) => {
      let newData: Journey_Type[] = setUpID(data);
      setJourney((prev) => {
        return newData;
      });
    });
  }, []);
  return (
    <Box sx={{ height: 600, width: "80%", margin: "0 0 10rem" }}>
      <div className="flex justify-center">
        <h1 className="text-4xl text-center my-5">Table Journey </h1>
        <FormControl
          sx={{
            m: 1,
            color: "wheat",
          }}
          variant="standard"
        >
          <InputLabel id="demo-customized-select-label"> Page number</InputLabel>
          <Select
            sx={{
              color: "wheat",
            }}
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={page}
            onChange={(e) => {
              SetPage(e.target.value as Number);
              fetchJourneyData(e.target.value as Number).then((data) => {
                let newData: Journey_Type[] = setUpID(data);
                setJourney((prev) => {
                  return newData;
                });
              });
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
          color: "#C76E4C",
          borderColor: "red",
        }}
        rows={journey}
        columns={columns}
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
const setUpID = (arg: Journey_Type[]): Journey_Type[] => {
  let newArg: Journey_Type[] = [];
  for (let i = 0; i < arg.length; i++) {
    arg[i].id = i + 1;
    newArg.push(arg[i]);
  }
  return newArg;
};
