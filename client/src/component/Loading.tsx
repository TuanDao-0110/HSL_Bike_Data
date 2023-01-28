import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <CircularProgress color="info" />
    </div>
  );
};

export default Loading;
