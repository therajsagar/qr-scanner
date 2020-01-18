import React, { useState } from "react";
import Scanner from "./components/Scanner";
import Result from "./components/Result";
import "./App.css";

export default () => {
  const [state, setState] = useState(null);

  const handleOutput = (val = null) => setState(val);
  console.log(state);

  const ActiveComponent = state ? Result : Scanner;

  return (
    <div className="App">
      <ActiveComponent {...{ handleOutput, state }} />
    </div>
  );
};
