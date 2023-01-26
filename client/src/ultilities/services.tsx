import axios from "axios";
import { BASE_URL } from "./Sources";

export interface StationType {
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
}
export interface Journey_Type {
  [index: string]: string | number;
  id: number;
  departureTime: string;
  returnTime: string;
  departureStationId: string;
  departureStationName: string;
  returnStationId: string;
  returnStationName: string;
  coveredDistance: string;
  duration: string;
}
export const fetchStationData = async (): Promise<StationType[]> => {
  try {
    const { data } = await axios({
      method: "GET",
      url: BASE_URL + "station",
    });
    return data.result;
  } catch (error) {
    if (error instanceof Error) {
      // alert(error);
    }
    return [];
  }
};

export const fetchJourneyData = async (page?: Number): Promise<Journey_Type[]> => {
  try {
    const { data, status } = await axios({
      method: "GET",
      url: BASE_URL + "journey" + `?page=${page}`,
    });
    return data.result;
  } catch (error) {
    if (error instanceof Error) {
      // alert(error);
    }
    return [];
  }
};
