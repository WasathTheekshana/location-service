import React, { useCallback, useEffect, useState } from "react";
import NormalButton from "../components/buttons/NormalButton";

const AddLocationModel = ({ isOpen }) => {
    
    const [closeModel, setCloseModel] = useState(isOpen);
    
    const refreshPage = () => {
        window.location.reload();
    }

    const handleClose = () => {
        refreshPage();
        setCloseModel(true);
    }

    if (closeModel) {
        return null;
    }

    if (!isOpen) return null;
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white outline-none focus:outline-none py-10 px-15">
          <div className="flex gap-3">
            <NormalButton text="Add Location" />
            <NormalButton text="Cancel" isBorder onClick={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLocationModel;
