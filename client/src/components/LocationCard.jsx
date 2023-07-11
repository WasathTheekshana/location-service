import React from "react";
import ChipButton from "./buttons/ChipButton";

const LocationCard = ({ name, address, phone, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md md:max-w-1/3 py-4 px-5 flex flex-row justify-between">
      <div>
        <h1 className="font-bold text-xl mb-3">{name}</h1>
        <h4 className="text-gray-500 text-xs mb-2">{phone}</h4>
        <h4 className="text-gray-500 text-xs">{address}</h4>
      </div>
      <div>
        <ChipButton onClick={onClick}/>
      </div>
    </div>
  );
};

export default LocationCard;
