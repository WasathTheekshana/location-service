import React, { useState } from 'react'
import Model from './Model'
import { useFormik } from 'formik';
import NormalButton from '../components/buttons/NormalButton';
import { updateLocation } from '../helper/helper';
import { Toaster, toast } from 'react-hot-toast';

const UpdateLocationModel = ({isOpen, locationId, name, address, phone}) => {
    const [closeModel, setCloseModel] = useState(isOpen);

    const formik = useFormik({
        initialValues: {
          name: name,
          address: address,
          phone: phone,
        },
        validateOnChange: false,
        validateOnBlur: false,
        enableReinitialize: true,
        onSubmit: async (values) => {
          let updatePromise = updateLocation(locationId,values);
          toast
            .promise(updatePromise, {
              loading: "Updating Location...",
              success: "Location Updated Successfully",
              error: "Name & Address is already exist",
            })
            .then(() => {
              console.log("Location Updated Successfully");
            })
            .catch((err) => {
                console.log(err);
            })
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
    <Model>
        <div>
        <h1 className="text-2xl">Update Location</h1>
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
          <NormalButton text="Update" submit />
          <NormalButton text="Cancel" isBorder onClick={handleClose} />
        </div>
      </form>
    </Model>
  )
}

export default UpdateLocationModel