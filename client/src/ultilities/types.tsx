import { GridColDef } from "@mui/x-data-grid";

export type Lang_Type = {
  station: {
    header: string;
    col: GridColDef[];
  };
  journey: {
    header: string;
    col: GridColDef[];
    page: string;
  };
  map: {
    header: string;
    top5Arrive: string;
    top5Depart: string;
    time: string;
    averageLeave: string;
    averageArrival: string;
    stationName:string,
  };
  main?: {
    discription: string;
    header: string;
    application: string;
    btnStart: string;
    btnLearnMore: string;
  };
  nav?: {
    routerJourney: string;
    routerStation: string;
  };
};
export type Journey_Type = {
  [index: string]: string | number;
  id: number;
  departureTime: string;
  departureStationId: string;
  departureStationName: string;
  returnStationId: string;
  returnStationName: string;
  coveredDistance: string;
  duration: string;
};
export type StationType = {
  [index: string]: string;
  id: string;
  stationID: string;
  Nimi: string;
  Namn: string;
  Name: string;
  Osoite: string;
  Adress: string;
  Kaupunki: string;
  Stad: string;
  Operaattor: string;
  Kapasiteet: string;
  x: string;
  y: string;
};

export type Top5Type = {
  details: StationType;
  count: number;
};
