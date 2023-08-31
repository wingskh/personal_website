import "./clock.scss";
import React from "react";

export const Word = ({ value, hidden = false }) => {
  return (
    <div className="digital">
      <p>{value}</p>
      <p style={{ visibility: hidden ? "hidden" : "visible" }}>{value}</p>
    </div>
  );
};
