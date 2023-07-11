import React from "react";
import ChipButton from "./buttons/ChipButton";

const LocationCard = ({ name, address, phone, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md md:w-1/3 py-4 px-5 flex flex-row justify-between">
      <div>
        <h1 className="font-bold text-xl mb-3">Wasath's Home</h1>
        <h4 className="text-gray-500 text-xs mb-1">+94 76 669 2190</h4>
        <h4 className="text-gray-500 text-xs">No-28/B Samagi Mawatha, Kanuwana, Ja Ela</h4>
      </div>
      <div>
        <ChipButton onClick={() => console.log("Go not location page")}/>
      </div>
    </div>
  );
};

export default LocationCard;
