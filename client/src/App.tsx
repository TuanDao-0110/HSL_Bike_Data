import "./App.css";
import * as React from "react";
import Journey_Table from "./component/Journey_Table";
import Station_Table from "./component/Station_Table";
import { Navigate, Route, Routes } from "react-router-dom";
import StationMap from "./component/map/Station_Map";
import Template from "./template/Template";
import MainPage from "./component/MainPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Template/>}>
        <Route index element={<MainPage />}></Route>
        <Route path="/journey" element={<Journey_Table />}></Route>
        <Route path="/station">
          <Route index element={<Station_Table />}></Route>
          <Route path=":stationId" element={<StationMap />}></Route>
        </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
