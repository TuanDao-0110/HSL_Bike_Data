import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { format } from "date-fns";
import { Lang_Type } from "../../ultilities/types";

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
    width: 100,
  },
  {
    field: "Namn",
    headerName: "Name",
    width: 250,
  },
  {
    field: "Adress",
    headerName: "Adress",
    width: 250,
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

export const state_SE: Lang_Type = {
  journey: {
    col: columnsJourney_SE,
    header: "Tabell Resa",
    page: "Antal Rader",
  },
  station: {
    col: columnsStation_SE,
    header: "Tabell Station",
  },
  map: {
    averageArrival: "Genomsnittlig Avståndsresa Anländer Till Stationen",
    averageLeave: "Genomsnittlig Avståndsresa Från Station",
    header: "Stations ID",
    time: "Tid",
    top5Arrive: "Topp 5 Ankomststationer",
    top5Depart: "Topp 5 Avgångsstationer",
    stationName: "Stations namn",
  },
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
