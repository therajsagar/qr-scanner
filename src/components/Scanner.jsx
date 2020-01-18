import React from "react";
import QrReader from "react-qr-reader";

export default ({ handleOutput }) => {
  const handleScan = data => {
    if (data) {
      console.log(data);
      handleOutput(data);
    }
  };

  const handleError = err => {
    console.error(err);
    handleOutput();
  };

  return (
    <QrReader
      delay={200}
      onError={handleError}
      onScan={handleScan}
      className="scan-comp"
    />
  );
};
