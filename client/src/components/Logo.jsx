import React from "react";

const Logo = ({ firstWord, secondWord }) => {
  return (
    <h1 className="text-2xl text-center">
      <span className="font-bold"> {firstWord} </span>
      {secondWord}
    </h1>
  );
};

export default Logo;
