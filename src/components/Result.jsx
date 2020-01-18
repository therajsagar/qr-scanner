import React from "react";

export default ({ state, handleOutput }) => {
  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => handleOutput()}>Re-Scan</button>
    </>
  );
};
