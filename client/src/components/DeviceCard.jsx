import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { DeleteButton } from "./buttons/DeleteButton";


const DeviceCard = ({
  deviceId,
  locationId,
  serialNumber,
  type,
  status,
  image,
  onClick,
}) => {

  return (
    <div>

      <Card className="relative rounded-lg shadow-md hover:transition transition hover:shadow-xl">
        <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
        <CardContent>
          <h1 className="font-bold text-xl mb-3">{serialNumber}</h1>
          <h4 className="text-gray-500 text-xs mb-2">{type}</h4>
          <h4 className="text-gray-500 text-xs">
            {status ? `Active` : `Inactive`}
          </h4>
        </CardContent>
        <CardActions className="absolute z-10 top-1 right-1">
          <Link to="">
            <DeleteButton
              onClick={onClick}
            />
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default DeviceCard;
