import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { format } from "date-fns";
import { Lang_Type } from "../redux_types/langague_types";

const columnsJourney_SE: GridColDef[] = [
  { field: "id", headerName: "Index", width: 90 },

  {
    field: "departureStationName",
    headerName: "Avgångsstationens Namn",
    width: 250,
  },
  {
    field: "returnStationName",
    headerName: "Retur Stations Namn",
    width: 250,
  },
  {
    field: "coveredDistance",
    headerName: "Täckt Avstånd (m)",
    width: 150,
  },

  {
    field: "departureTime",
    headerName: "Avgångstid",
    width: 200,
    valueGetter: (params: GridValueGetterParams) => {
      return format(new Date(params.value), "P p");
    },
  },
  {
    field: "returnTime",
    headerName: "Retur Tid",
    width: 200,
    valueGetter: (params: GridValueGetterParams) => {
      return format(new Date(params.value), "P p");
    },
  },
  {
    field: "duration",
    headerName: "Varaktighet (s)",
    width: 150,
  },
];

const columnsStation_SE: GridColDef[] = [
  { field: "id", headerName: "INDEX", width: 70 },
  {
    field: "stationID",
    headerName: "Station ID",
    width: 150,
  },
  {
    field: "Namn",
    headerName: "Name",
    width: 150,
  },
  {
    field: "Adress",
    headerName: "Adress",
    width: 150,
  },
  {
    field: "Operaattor",
    headerName: "Operatör",
    width: 150,
  },
  {
    field: "Kapasiteet",
    headerName: "Kapacitet",
    width: 150,
  },
  {
    field: "x",
    headerName: "Longitud",
    width: 100,
  },
  {
    field: "y",
    headerName: "Latitud",
    width: 100,
  },
];

const map_SE = {
  header: "station",
};

export const state_SE: Lang_Type = {
  journey: {
    col: columnsJourney_SE,
    header: "Tabell Resa",
    page: "Sidonummer",
  },
  station: {
    col: columnsStation_SE,
    header: "Tabell Station",
  },
  map: map_SE,
  main: {
    btnLearnMore: "Läs Mer",
    btnStart: "Start",
    application: "Dataapplikation",
    discription:
      "Helsingfors stadscykel-app är en webbapplikation som låter användare se data från stadscykelresor gjorda i huvudstadsområdet. Appen är designad för Solita Dev Academy Finland 2023 föruppdrag och använder en backend-tjänst för att hämta data från tre datauppsättningar med resedata och en datauppsättning med information om stadscykelstationer. ",
    header: "Helsingfors Data ",
  },
  nav: {
    routerJourney: "Resa",
    routerStation: "Station",
  },
};
