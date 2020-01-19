import React from "react";
import QrReader from "react-qr-reader";

export default ({ handleOutput, state }) => {
  const handleScan = data => {
    if (data) {
      handleOutput(data);
    }
  };

  const handleError = ({ message }) => {
    handleOutput(message);
  };

  return (
    <>
      <h2 className="display-txt">Scanning..</h2>
      {!state && <div className="loader"></div>}
      <QrReader
        delay={200}
        onError={handleError}
        onScan={handleScan}
        className="scan-comp"
      />
    </>
  );
};
