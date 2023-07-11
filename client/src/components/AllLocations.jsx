import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import RoundButton from "./buttons/RoundButton";
import { AiOutlinePlus } from "react-icons/ai";
import { getLocations } from "../helper/helper";
import LocationCard from "./LocationCard";
import Error from "./Error";
import Loading from "./Loading";
import AddLocationModel from "../models/AddLocation.model";

const AllLocations = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddLocationModelOpen, setIsAddLocationModelOpen] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await getLocations();
      setLocations(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching locations:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <AddLocationModel isOpen={isAddLocationModelOpen} />
      <Heading
        mainHeading="Locations"
        description="Select a location to view all the devices"
        buttonComponent={
          <RoundButton
            text="Add Location"
            icon={<AiOutlinePlus />}
            onClick={() => setIsAddLocationModelOpen(true)}
          />
        }
      />

      <div className="flex flex-col md:flex-row gap-2">
        {isLoading ? (
          <Loading />
        ) : locations.length > 0 ? (
          locations.map((location) => (
            <LocationCard
              key={location._id}
              name={location.name}
              address={location.address}
              phone={location.phone}
              // onClick={() => console.log("Location 1")}
            />
          ))
        ) : (
          <Error
            heading="No Locations Found!"
            description="It seems like there are no available locations in here!"
          />
        )}
      </div>
    </>
  );
};

export default AllLocations;
