import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { useState } from "react";

const Loading = (props) => {
  const [color, setColor] = useState(" hsl(150, 100%, 66%");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
  };
  return (
    <div className="loader">
      <PulseLoader
        color={color}
        loading={props.newLoading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
