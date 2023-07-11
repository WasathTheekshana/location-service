import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Logo from "../components/Logo";
import { useParams } from "react-router-dom";
import { getLocationById } from "../helper/helper";
import LocationsHeading from "../components/LocationsHeading";
import RoundButton from "../components/buttons/RoundButton";
import LocationDeleteModel from "../models/LocationDelete.model";
import UpdateLocationModel from "../models/UpdateLocation.model";
import Error from "../components/Error";
import Loading from "../components/Loading";

const LocationDetails = () => {
  const [location, setLocation] = useState({});
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [isUpdateModelOpen, setIsUpdateModelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { locationSlug } = useParams();

  const fetchLocationsById = async () => {
    try {
      const response = await getLocationById(locationSlug);
      setLocation(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching locations:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLocationsById();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Logo firstWord="Location" secondWord="Service." />
      <LocationDeleteModel isOpen={isDeleteModelOpen} locationId={locationSlug}/>
      <UpdateLocationModel
        isOpen={isUpdateModelOpen}
        location={location._id}
        locationId={location._id}
        name={location.name}
        address={location.address}
        phone={location.phone}
      />
      <div>
        <LocationsHeading
          name={location.name}
          address={location.address}
          phone={location.phone}
          deviceCount={location.devices?.length}
          buttonOne={
            <RoundButton
              text="Update Location"
              onClick={() => setIsUpdateModelOpen(true)}
            />
          }
          buttonTwo={
            <RoundButton
              text="Delete Location"
              onClick={() => setIsDeleteModelOpen(true)}
            />
          }
        />
      </div>
    </Container>
  );
};

export default LocationDetails;
