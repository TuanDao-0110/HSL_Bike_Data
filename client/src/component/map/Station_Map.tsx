import React, { ReactElement, useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { API } from "../../ultilities/Sources";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loading from "../Loading";

const StationMap = () => {
  const station = useSelector((state: RootState) => state.stationReducer);
  const { x: lng, y: lat, Kaupunki, Adress, Nimi } = station;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API,
  });
  if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="text-center mt-10 gap-4 flex  flex-col">
        <h1 className="text-3xl text-rose-200">
          {Kaupunki} - {Adress}- {Nimi}
        </h1>
        <GoogleMap
          zoom={15}
          center={{ lng: Number(lng), lat: Number(lat) }}
          mapContainerStyle={{
            height: "500px",
            width: "900px",
          }}
        >
          <Marker position={{ lng: Number(lng), lat: Number(lat) }} />
        </GoogleMap>
      </div>
    );
  }
};

export default StationMap;
