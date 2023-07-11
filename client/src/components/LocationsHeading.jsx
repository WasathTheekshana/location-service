import React from "react";

const LocationsHeading = ({ name, address, phone, deviceCount, buttonOne, buttonTwo }) => {

    const style = {
        div: "flex flex-col  md:flex-row",
        heading: "text-gray-500 text-sm mr-6",
        details: "text-sm",
    }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-6">
      <div>
        <h1 className="text-3xl mt-5 mb-7 text-center md:text-left md:my-10">{name}</h1>
        <div className="flex flex-col gap-4 md:gap-2">
          <div className={style.div}>
            <h3 className={style.heading}>Devices:</h3>
            <h3 className={style.details}>{deviceCount}</h3>
          </div>
          <div className={style.div}>
            <h3 className={style.heading}>Phone No:</h3>
            <h3 className={style.details}>{phone}</h3>
          </div>
          <div className={style.div}>
            <h3 className={style.heading}>Address:</h3>
            <h3 className={style.details}>{address}</h3>
          </div>
          
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-5">
        {buttonOne}
        {buttonTwo}
      </div>
    </div>
  );
};

export default LocationsHeading;
