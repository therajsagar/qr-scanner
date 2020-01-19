import React from "react";

export default ({ state, handleOutput }) => {
  return (
    <div className="result-wrapper">
      <button onClick={() => handleOutput()} className="retry-btn">
        {state === "Permission denied" ? "Retry" : "Re-Scan"}
      </button>
      <h3 className="op">{state}</h3>
    </div>
  );
};
