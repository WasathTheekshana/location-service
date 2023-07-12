import React, { useState } from 'react'
import Model from './Model'
import NormalButton from '../components/buttons/NormalButton'
import { useFormik } from 'formik'
import { converToBase64 } from '../helper/convert'
import Dummy from '../assets/dummy.png'
import { addDevice } from '../helper/helper'
import { toast } from 'react-hot-toast'

const AddDeviceModel = ({isOpen, locationId}) => {
  const [closeModel, setCloseModel] = useState(isOpen);
  const [file, setFile] = useState();


  const formik = useFormik({
    initialValues: {
      serialNumber: "",
      type: "",
      status: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, {image: file});
       console.log(values);

       let addPostPromise = addDevice(locationId,values)
       toast.promise(addPostPromise, {
        loading: 'Adding device...',
        success: 'Device added successfully',
        error: 'Error adding device'
       })
    }
  });

  const onUpload = async (e) => {
    const base64 = await converToBase64(e.target.files[0]);
    setFile(base64);
  }

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
        <h1 className="text-2xl">Add New Device</h1>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col gap-5"
      >
         <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img src={file || Dummy} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" id="profile" name="profile" />
            </div>
        <input
          {...formik.getFieldProps("serialNumber")}
          type="text"
          className="w-full border-black border rounded-lg py-2 pr-3 pl-6"
          placeholder="Serial Number*"
          required
        />
        <select
          {...formik.getFieldProps("type")}
       name='type' className='w-full border-black border rounded-lg py-2 pl-6'>
          <option value="">Select Type</option>
          <option value="pos">POS</option>
          <option value="kisok">KISOK</option>
          <option value="signage">SIGNAGE</option>
        </select>

        <select 
          {...formik.getFieldProps("status")}
        name='status' className='w-full border-black border rounded-lg py-2 pl-6'>
          <option value="">Select Status</option>
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>
        </select>
       
        
        <div className="flex gap-3 justify-start w-full">
          <NormalButton text="Add Location" submit />
          <NormalButton text="Cancel" isBorder onClick={handleClose} />
        </div>
      </form>
    </Model>
  )
}

export default AddDeviceModel