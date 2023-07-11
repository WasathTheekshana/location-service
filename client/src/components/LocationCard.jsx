import React from "react";
import ChipButton from "./buttons/ChipButton";
import { Link } from "react-router-dom";

const LocationCard = ({ name, address, phone, link }) => {
  return (
    
      <div className="bg-white rounded-lg shadow-md md:max-w-1/3 py-4 px-5 flex flex-row justify-between hover:transition transition hover:shadow-xl">
        <div>
          <h1 className="font-bold text-xl mb-3">{name}</h1>
          <h4 className="text-gray-500 text-xs mb-2">{phone}</h4>
          <h4 className="text-gray-500 text-xs">{address}</h4>
        </div>
        <div>
          <Link to={link}>
            <ChipButton />
          </Link>
        </div>
      </div>
    
  );
};

export default LocationCard;
