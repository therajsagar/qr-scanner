import React from "react";
import QrReader from "react-qr-reader";
import "./App.css";

function App() {
  const handleScan = data => {
    if (data) {
      console.log(data);
    }
  };

  const handleError = err => {
    console.error(err);
  };

  return (
    <div className="App">
      <h1>Please Scan!</h1>
      <QrReader
        delay={200}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default App;
