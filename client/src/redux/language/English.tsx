import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { format } from "date-fns";
import { Lang_Type } from "../redux_types/langague_types";

const columnsJourney_EN: GridColDef[] = [
  { field: "id", headerName: "Index", width: 90 },

  {
    field: "departureStationName",
    headerName: "Departure Station Name",
    width: 250,
  },
  {
    field: "returnStationName",
    headerName: "Return Station Name",
    width: 250,
  },
  {
    field: "coveredDistance",
    headerName: "Covered Distance (m)",
    width: 150,
  },
  {
    field: "departureTime",
    headerName: "Departure Time",
    width: 200,
    valueGetter: (params: GridValueGetterParams) => {
      return format(new Date(params.value), "P p");
    },
  },
  {
    field: "returnTime",
    headerName: "Return Time",
    width: 200,
    valueGetter: (params: GridValueGetterParams) => {
      return format(new Date(params.value), "P p");
    },
  },
  {
    field: "duration",
    headerName: "Duration (s)",
    width: 150,
  },
];

const columnsStation_EN: GridColDef[] = [
  { field: "id", headerName: "INDEX", width: 70 },
  {
    field: "stationID",
    headerName: "Station ID",
    width: 150,
  },
  {
    field: "Nimi",
    headerName: "Name",
    width: 150,
  },
  {
    field: "Osoite",
    headerName: "Address",
    width: 150,
  },
  {
    field: "Operaattor",
    headerName: "Operator",
    width: 150,
  },
  {
    field: "Kapasiteet",
    headerName: "Capacity",
    width: 150,
  },
  {
    field: "x",
    headerName: "Longitude",
    width: 100,
  },
  {
    field: "y",
    headerName: "Latitude",
    width: 100,
  },
];

const map_EN = {
  header: "station",
};

export const state_EN: Lang_Type = {
  journey: {
    col: columnsJourney_EN,
    header: "Table Journey",
    page:'Page Number'
  },
  station: {
    col: columnsStation_EN,
    header: "Table Station",
  },
  map: map_EN,
  main: {
    btnLearnMore: "Learn More",
    btnStart: "Start",
    application: "Application",
    discription:
      "The Helsinki city bike app is a web application that allows users to view data from city bike journeys made in the Helsinki Capital area. The app is designed for the Solita Dev Academy Finland 2023 pre-assignment and utilizes a backend service to fetch data from three datasets of journey data and one dataset of city bike station information. ",
    header: "Helsinki Data ",
  },
  nav: {
    routerJourney: "Journey",
    routerStation: "Station",
  },
};
