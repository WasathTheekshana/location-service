import React, { useEffect } from "react";
import Heading from "./Heading";
import RoundButton from "./buttons/RoundButton";
import { AiOutlinePlus } from "react-icons/ai";
import { getLocations } from "../helper/helper";
import LocationCard from "./LocationCard";

const AllLocations = () => {

    useEffect(() => {
        getLocations()
    }, []);

  return (
    <>
      <Heading
        mainHeading="Locations"
        description="Select a location to view all the devices"
        buttonComponent={
          <RoundButton
            text="Add Location"
            icon={<AiOutlinePlus />}
            onClick={() => console.log("Add Location")}
          />
        }
      />

        <div>
            <LocationCard />
        </div>

    </>
  );
};

export default AllLocations;
