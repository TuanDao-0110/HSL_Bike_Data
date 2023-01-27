import { RedoOutlined } from "@mui/icons-material";
import { Journey_Type, StationType, Top5Type } from "../../ultilities/types";

export const averageStartFromStation = (stationId: string, journeyData: Journey_Type[]): string => {
  let total = 0;
  let count = 0;
  for (let i = 0; i < journeyData.length; i++) {
    if (journeyData[i].departureStationId === stationId) {
      total += Number(journeyData[i]["coveredDistance"]);
      count++;
    }
  }

  return (total / count).toFixed(2);
};

export const averageEndAtStation = (stationId: string, journeyData: Journey_Type[]): string => {
  let total = 0;
  let count = 0;
  for (let i = 0; i < journeyData.length; i++) {
    if (journeyData[i].returnStationId === stationId) {
      total += Number(journeyData[i]["coveredDistance"]);
      count++;
    }
  }
  return (total / count).toFixed(2);
};

export const top5DepartureStation = (stationId: string, journeyData: Journey_Type[], stationData: StationType[]) => {
  let listTop5Station: Top5Type[] = [];
  let listLeavingJourney: Journey_Type[] = [];
  let listArrivalStation: StationType[] = [];
  //   1. find list leaving journey from selected station
  for (let i = 0; i < journeyData.length; i++) {
    if (journeyData[i].departureStationId === stationId) {
      listLeavingJourney.push(journeyData[i]);
    }
  }
  //   2. find list all destination station from select station
  for (let i = 0; i < listLeavingJourney.length; i++) {
    for (let j = 0; j < stationData.length; j++) {
      if (stationData[j].stationID === listLeavingJourney[i].returnStationId) {
        listArrivalStation.push(stationData[j]);
      }
    }
  }
  // 3. count and sort and return final 5 top destation from selected station
  for (let i = 0; i < listArrivalStation.length; i++) {
    let index = listTop5Station.findIndex((item) => item.details.stationID === listArrivalStation[i].stationID);
    if (index === -1) {
      if (listArrivalStation[i].stationID !== stationId) {
        let temp: Top5Type = {
          count: 1,
          details: listArrivalStation[i],
        };
        listTop5Station.push(temp);
      }
    } else {
      listTop5Station[index].count++;
    }
  }

  return listTop5Station.sort((a, b) => b.count - a.count).slice(0, 5);
};

export const top5ArrivalStation = (stationId: string, journeyData: Journey_Type[], stationData: StationType[]) => {
  let listTop5Station: Top5Type[] = [];
  let listArrivalJourney: Journey_Type[] = [];
  let listDepartStation: StationType[] = [];
  //   1. find list arrival from other to selected station
  for (let i = 0; i < journeyData.length; i++) {
    if (journeyData[i].returnStationId === stationId) {
      listArrivalJourney.push(journeyData[i]);
    }
  }
  //   2. find list departure station leaving to selected station
  for (let i = 0; i < listArrivalJourney.length; i++) {
    for (let j = 0; j < stationData.length; j++) {
      if (stationData[j].stationID === listArrivalJourney[i].departureStationId) {
        listDepartStation.push(stationData[j]);
      }
    }
  }
  // sort vs set top 5
  for (let i = 0; i < listDepartStation.length; i++) {
    let index = listTop5Station.findIndex((item) => item.details.stationID === listDepartStation[i].stationID);
    if (index === -1) {
      if (listDepartStation[i].stationID !== stationId) {
        let temp: Top5Type = {
          count: 1,
          details: listDepartStation[i],
        };
        listTop5Station.push(temp);
      }
    } else {
      listTop5Station[index].count++;
    }
  }
  console.log(listTop5Station);
  return listTop5Station.sort((a, b) => b.count - a.count).slice(0, 5);
};
