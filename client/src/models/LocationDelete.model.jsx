import React, { useState } from "react";
import Model from "./Model";
import NormalButton from "../components/buttons/NormalButton";
import { deleteLocation } from "../helper/helper";
import { useNavigate } from "react-router-dom";

const LocationDeleteModel = ({ isOpen, locationId }) => {
  const [closeModel, setCloseModel] = useState(isOpen);

    const navigate = useNavigate();

    const deleteLocationById = async () => {
        try {
             deleteLocation(locationId)
                .then(() => {
                    navigate("/");
                })
                .catch((err) => {
                    console.log(err);
                })
           
        } catch (error) {
            console.error("Error fetching locations:", err)
    }}

  const refreshPage = () => {
    window.location.reload();
  };

  const handleClose = () => {
    refreshPage();
    setCloseModel(true);
  };

  if (closeModel) {
    return null;
  }

  if (!isOpen) return null;

  return (
    <Model>
      <div>
        <h1 className="text-2xl">Are you sure you want to delete this location?</h1>
      </div>
      
        <div className="flex gap-3 justify-center w-full">
          <NormalButton 
            text="Delete" 
            onClick={() => deleteLocationById()}
          />
          <NormalButton text="Cancel" isBorder onClick={handleClose} />
        </div>
    </Model>
  );
};

export default LocationDeleteModel;
