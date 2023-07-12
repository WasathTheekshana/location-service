import React, { useEffect, useState } from "react";
import DeviceCard from "./DeviceCard";
import Heading from "./Heading";
import RoundButton from "./buttons/RoundButton";
import { AiOutlinePlus } from "react-icons/ai";
import Error from "./Error";
import Loading from "./Loading";
import { getDevices } from "../helper/helper";
import AddDeviceModel from "../models/AddDevice.model";

const AllDevices = ({ locationId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [devices, setDevices] = useState([]);
  const [isAddDeviceModelOpen, setIsAddDeviceModelOpen] = useState(false);

  const fetchDevices = async () => {
    try {
      const response = await getDevices(locationId);
      setDevices(response);
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching devices:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
        <AddDeviceModel isOpen={isAddDeviceModelOpen} locationId={locationId}/>
      <Heading
        mainHeading="Devices"
        description="List of devices in this location"
        buttonComponent={
          <RoundButton
            text="Add Device"
            icon={<AiOutlinePlus />}
            onClick={() => setIsAddDeviceModelOpen(true)}
          />
        }
      />
      <div
        className={
          devices.length == 0
            ? `flex`
            : `flex flex-col md:grid md:grid-cols-3 gap-2`
        }
      >
        {isLoading ? (
          <Loading />
        ) : devices.length > 0 ? (
          devices.map((device) => (
            <DeviceCard
              key={device._id}
              serialNumber={device.serialNumber}
              type={device.type}
              status={device.status}
              image={device.image}
            />
          ))
        ) : (
          <Error
            title="No Devices Found"
            description="Add a new device to this location"
          />
        )}
      </div>
    </div>
  );
};

export default AllDevices;
