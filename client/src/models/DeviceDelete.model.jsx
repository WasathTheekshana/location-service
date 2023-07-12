import React, { useState } from "react";
import Model from "./Model";
import NormalButton from "../components/buttons/NormalButton";

const DeviceDeleteModel = ({ locationId, deviceId, isOpen }) => {

  console.log(locationId, deviceId);


  return (
    <Model>
      <div>
        <h1 className="text-2xl">
          Are you sure you want to delete this location?
        </h1>
      </div>

      <div className="flex gap-3 justify-center w-full">
        <NormalButton text="Delete" onClick={() => deleteLocationById()} />
        <NormalButton text="Cancel" isBorder onClick={handleClose} />
      </div>
    </Model>
  );
};

export default DeviceDeleteModel;
