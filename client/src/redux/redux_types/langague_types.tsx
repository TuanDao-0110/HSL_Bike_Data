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
