import React from "react";
import QrReader from "react-qr-reader";

export default ({ handleOutput }) => {
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
      <h2>Scanning...</h2>
      <QrReader
        delay={200}
        onError={handleError}
        onScan={handleScan}
        className="scan-comp"
      />
    </>
  );
};
