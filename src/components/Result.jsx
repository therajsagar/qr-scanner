import React from "react";

export default ({ state, handleOutput }) => {
  return (
    <div className="result-wrapper">
      <div className="output">{state}</div>
      <button onClick={() => handleOutput()} className="retry-btn">
        {state === "Permission denied" ? "Retry" : "Re-Scan"}
      </button>
    </div>
  );
};
