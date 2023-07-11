import React from "react";
import { LineWave } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <LineWave
        height="100"
        width="100"
        color="#FFFFF"
        ariaLabel="line-wave"
        visible={true}
      />
    </div>
  );
};

export default Loading;
