import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { format } from "date-fns";
import { Lang_Type } from "../../ultilities/types";
const columnsJourney_FI: GridColDef[] = [
  { field: "id", headerName: "Indeksi", width: 90 },

  {
    field: "departureStationName",
    headerName: "Lähtö Aseman Nimi",
    width: 250,
  },
  {
    field: "returnStationName",
    headerName: "Palauta Aseman Nimi",
    width: 250,
  },
  {
    field: "coveredDistance",
    headerName: "Katettu Etäisyys (m)",
    width: 150,
  },
  {
    field: "departureTime",
    headerName: "Lähtöaika",
    width: 200,
    valueGetter: (params: GridValueGetterParams) => {
      return format(new Date(params.value), "P p");
    },
  },
  {
    field: "returnTime",
    headerName: "Paluuaika",
    width: 200,
    valueGetter: (params: GridValueGetterParams) => {
      return format(new Date(params.value), "P p");
    },
  },
  {
    field: "duration",
    headerName: "Matka Kesto (s)",
    width: 150,
  },
];

const columnsStation_FI: GridColDef[] = [
  { field: "id", headerName: "INDEX", width: 70 },
  {
    field: "stationID",
    headerName: "Aseman ID",
    width: 100,
  },
  {
    field: "Nimi",
    headerName: "Nimi",
    width: 250,
  },
  {
    field: "Osoite",
    headerName: "Osoite",
    width: 250,
  },
  {
    field: "Operaattor",
    headerName: "Operaattor",
    width: 150,
  },
  {
    field: "Kapasiteet",
    headerName: "Kapasiteet",
    width: 150,
  },
  {
    field: "x",
    headerName: "Pituusaste",
    width: 100,
  },
  {
    field: "y",
    headerName: "Leveysaste",
    width: 100,
  },
];

export const state_FI: Lang_Type = {
  journey: {
    col: columnsJourney_FI,
    header: "Taulu Matka",
    page: "Rivin Numero",
  },
  station: {
    col: columnsStation_FI,
    header: "Taulu Asema",
  },
  map: {
    averageArrival: "Keskimääräinen Matkamatka Saapuu Asemalle",
    averageLeave: "Keskimääräinen Matka Asemalta",
    header: "Aseman ID",
    time: "Aika",
    top5Arrive: "5 Parasta Saapumisasemaa",
    top5Depart: "5 Parasta Lähtöasemaa",
    stationName: "Aseman Nimi",
  },
  main: {
    btnLearnMore: "Lue Lisää",
    btnStart: "Aloita",
    application: "Tietosovellus",
    discription:
      "Helsingin kaupunkipyöräsovellus on verkkosovellus, jonka avulla käyttäjät voivat tarkastella tietoja pääkaupunkiseudulla tehdyistä kaupunkipyörämatkoista. Sovellus on suunniteltu Solita Dev Academy Finland 2023 -esitehtävään ja hyödyntää taustapalvelua tietojen hakemiseen kolme matkatietojen tietojoukkoa ja yksi tietojoukko kaupunkipyöräaseman tiedoista.",
    header: "Helsingin ",
  },
  nav: {
    routerJourney: "Matka",
    routerStation: "Asema",
  },
};
