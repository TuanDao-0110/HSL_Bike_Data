import React, { ReactElement, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { API } from "../../ultilities/Sources";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loading from "../Loading";
import { top5DepartureStation, top5ArrivalStation, averageStartFromStation, averageEndAtStation } from "./Service_map";
import Switch from "@mui/material/Switch";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Top5Type } from "../../ultilities/types";

const StationMap = () => {
  const station = useSelector((state: RootState) => state.stationMap);
  const { journeyArr } = useSelector((state: RootState) => state.journeys);

  const stationData = useSelector((state: RootState) => state.stations);
  const language = useSelector((state: RootState) => state.language.map);
  const { x: lng, y: lat, Kaupunki, Adress, stationID } = station;
  const [showLeavingDistance, setShowLeavingDistance] = useState<boolean>(false);
  const [showArrivalDistance, setShowArrivalDistance] = useState<boolean>(false);
  const [showTop5Leaving, setShowtop5Leaving] = useState<boolean>(false);
  const [showTop5Arrival, setShowtop5Arrival] = useState<boolean>(false);

  const renderTop5ArrivalStation = () => {
    return showTop5Arrival ? (
      top5ArrivalStation(stationID, journeyArr, stationData)?.map((item, index) => {
        const { details } = item;
        return (
          <Marker
            key={index}
            position={{ lng: Number(details.x), lat: Number(details.y) }}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: "green",
              fillOpacity: 0.7,
              scale: 8,
              strokeColor: "white",
              strokeWeight: 4,
            }}
          />
        );
      })
    ) : (
      <></>
    );
  };
  const renderTop5DepartStation = () => {
    return showTop5Leaving ? (
      top5DepartureStation(stationID, journeyArr, stationData)?.map((item, index) => {
        const { details } = item;
        return (
          <Marker
            key={index}
            position={{ lng: Number(details.x), lat: Number(details.y) }}
            icon={{
              // path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: "red",
              fillOpacity: 0.7,
              scale: 8,
              strokeColor: "white",
              strokeWeight: 4,
            }}
          />
        );
      })
    ) : (
      <></>
    );
  };

  const renderTable = (arr: Top5Type[], show: boolean): ReactElement => {
    return (
      <div className={`${show ? "opacity-1" : "opacity-0"}`}>
        {arr.map((item, index) => {
          const { details, count } = item;

          return (
            <div className="flex justify-between" key={index}>
              <div>
                {language.stationName}: <span className="text-xl text-red-500">{details.Name} </span>
              </div>
              <div>
                {language.time}:<span className="text-2xl text-green-500"> {count}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const renderDistance = (distance: string | number, show: boolean): ReactElement => {
    return <h1 className={`${show ? "opacity-1" : "opacity-0"}`}>{distance === "NaN" ? "No distance" : distance} m</h1>;
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API,
  });
  if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="text-center my-20 gap-4 flex  flex-col justify-center items-center">
        <h1 className="text-2xl">
          {Kaupunki} - {Adress} - {language.header}: {stationID}
        </h1>
        <GoogleMap
          zoom={10}
          center={{ lng: Number(lng), lat: Number(lat) }}
          mapContainerStyle={{
            height: "500px",
            width: "900px",
          }}
        >
          <Marker position={{ lng: Number(lng), lat: Number(lat) }} />
          {renderTop5ArrivalStation()}
          {renderTop5DepartStation()}
        </GoogleMap>
        <div className=" w-3/4 m-auto">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={(e) => {
                    setShowtop5Arrival(e.target.checked);
                  }}
                  color="success"
                />
              }
              label={`${language.top5Arrive}`}
            />
            {renderTable(top5ArrivalStation(stationID, journeyArr, stationData), showTop5Arrival)}
            <FormControlLabel
              control={
                <Switch
                  onChange={(e) => {
                    setShowtop5Leaving(e.target.checked);
                  }}
                  color="error"
                />
              }
              label={`${language.top5Depart}`}
            />
            {renderTable(top5DepartureStation(stationID, journeyArr, stationData), showTop5Leaving)}
            <FormControlLabel
              control={
                <Switch
                  onChange={(e) => {
                    setShowLeavingDistance(e.target.checked);
                  }}
                />
              }
              label={`${language.averageLeave}`}
            />
            {renderDistance(averageStartFromStation(stationID, journeyArr), showLeavingDistance)}
            <FormControlLabel
              control={
                <Switch
                  onChange={(e) => {
                    setShowArrivalDistance(e.target.checked);
                  }}
                />
              }
              label={language.averageArrival}
            />
            {renderDistance(averageEndAtStation(stationID, journeyArr), showArrivalDistance)}
          </FormGroup>
        </div>
      </div>
    );
  }
};

export default StationMap;
