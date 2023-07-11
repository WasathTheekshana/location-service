import React from "react";

const Heading = ({
    mainHeading,
    description,
    buttonComponent
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 my-6">
      <div>
        <h1 className="text-2xl">{mainHeading}</h1>
        <h3 className="text-gray-500 text-sm">{description}</h3>
      </div>
      <div>
        {buttonComponent}
      </div>
    </div>
  );
};

export default Heading;
