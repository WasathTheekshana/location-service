import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ firstWord, secondWord }) => {
  return (
    <Link to="/">
      <h1 className="text-2xl text-center mt-6">
        <span className="font-bold"> {firstWord} </span>
        {secondWord}
      </h1>
    </Link>
  );
};

export default Logo;
