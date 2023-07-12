import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import RoundButton from "./buttons/RoundButton";
import { AiOutlinePlus } from "react-icons/ai";
import { getLocations } from "../helper/helper";
import LocationCard from "./LocationCard";
import Error from "./Error";
import Loading from "./Loading";
import AddLocationModel from "../models/AddLocation.model";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const AllLocations = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddLocationModelOpen, setIsAddLocationModelOpen] = useState(false);

  const navigate = useNavigate();

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

  const locationPage = () => {
    navigate("/");
  };

  if (isLoading) {
    return <Loading />;
  }

  if (locations === undefined) {
    return (
      <div>
        <Loading />
        <Error
          heading="Server is not running!"
          description="Please check the server or try again later."
        />
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
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

      <div
        className={
          locations.length == 0
            ? `flex`
            : `flex flex-col md:grid md:grid-cols-3 gap-2`
        }
      >
        {isLoading ? (
          <Loading />
        ) : locations.length > 0 ? (
          locations.map((location) => (
            <LocationCard
              key={location._id}
              name={location.name}
              address={location.address}
              phone={location.phone}
              link={`/${location._id}`}
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
