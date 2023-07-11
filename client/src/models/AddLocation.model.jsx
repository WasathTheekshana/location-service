import React, {useState } from "react";
import NormalButton from "../components/buttons/NormalButton";
import { useFormik } from "formik";
import { addLocation } from "../helper/helper";
import { Toaster, toast } from "react-hot-toast";

const AddLocationModel = ({ isOpen }) => {
  const [closeModel, setCloseModel] = useState(isOpen);

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phone: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      let registerPromise = addLocation(values);
      toast
        .promise(registerPromise, {
          loading: "Adding Location...",
          success: "Location Added Successfully",
          error: "Name & Address is already exist",
        })
        .then(() => {
          handleClose();
        });
    },
  });

  const refreshPage = () => {
    window.location.reload();
  };

  const handleClose = () => {
    refreshPage();
    setCloseModel(true);
  };

  if (closeModel) {
    return null;
  }

  if (!isOpen) return null;
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col gap-10 items-center w-full bg-white outline-none focus:outline-none py-10 px-16">
          <div>
            <h1 className="text-2xl">Add New Location</h1>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full flex flex-col gap-5"
          >
            <input
              {...formik.getFieldProps("name")}
              type="text"
              className="w-full border-black border rounded-lg py-2 pr-3 pl-6"
              placeholder="Name*"
              required
            />
            <input
              {...formik.getFieldProps("address")}
              type="text"
              className="w-full border-black border rounded-lg py-2 pr-3 pl-6"
              placeholder="Address"
            />
            <input
              {...formik.getFieldProps("phone")}
              type="text"
              className="w-full border-black border rounded-lg py-2 pr-3 pl-6"
              placeholder="Phone No."
            />
            <div className="flex gap-3 justify-start w-full">
              <NormalButton text="Add Location" submit />
              <NormalButton text="Cancel" isBorder onClick={handleClose} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLocationModel;
