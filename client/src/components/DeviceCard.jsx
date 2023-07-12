import React from "react";
import { Link } from "react-router-dom";
import ChipButton from "./buttons/ChipButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const DeviceCard = ({ serialNumber, type, status, image }) => {
  return (
    <Card className="rounded-lg shadow-md hover:transition transition hover:shadow-xl">
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <h1 className="font-bold text-xl mb-3">{serialNumber}</h1>
        <h4 className="text-gray-500 text-xs mb-2">{type}</h4>
        <h4 className="text-gray-500 text-xs">
          {status ? `Active` : `Inactive`}
        </h4>
      </CardContent>
      <CardActions>
        <Link to="">
          <ChipButton />
        </Link>
      </CardActions>
    </Card>
  );
};

export default DeviceCard;
