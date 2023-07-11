import React from "react";
import { Toaster } from "react-hot-toast";

const Model = ({children}) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col gap-10 items-center w-full bg-white outline-none focus:outline-none py-10 px-16">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Model;
