import DeviceModel from "../../models/device.model.js";
import Location from "../../models/location.model.js";

//View all devices in a location by location ID
export const getDevices = async (req, res) => {
  const { locationId } = req.query;
  const location = await Location.findById(locationId).populate("devices");
  if (!location) {
    return res.status(404).json({ error: "Location not found" });
  }
  return res.status(200).json(location.devices);
};

// Add a new device to a location
export const addDevice = async (req, res) => {
  const { locationId } = req.query;
  const location = await Location.findById(locationId);
  if (!location) {
    return res.status(404).json({ error: "Location not found" });
  }
  const device = new DeviceModel(req.body);
  try {
    await device.save();
    location.devices.push(device);
    await location.save();
    return res.status(201).json({ message: "Device added successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Serial number must be unique!" });
  }
};

// Delete a device from a location
export const deleteDevice = async (req, res) => {
  try {
    const { locationId } = req.query;
    const location = await Location.findById(locationId);
    if (!location) {
      return res.status(404).json({ error: "Location not found" });
    }

    const { deviceId } = req.query;
    DeviceModel.findByIdAndDelete(deviceId)
      .then((data) => {
        if (!data) {
          return res.status(404).json({ error: "Device not found" });
        }
        location.devices.pull(deviceId);
        location.save();
        return res.status(200).json({ message: "Device deleted successfully" });
      })
      .catch((error) => {
        return res.status(500).json({ error: "Something went wrong!" });
      });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// Update a device in a location
export const updateDevice = async (req, res) => {
  try {
    const { locationId, deviceId } = req.query;

    const location = await Location.findById(locationId);
    if (!location) {
      return res.status(404).json({ error: "Location not found" });
    }

    const device = await DeviceModel.findByIdAndUpdate(deviceId, req.body, {
      new: true,
    });

    if (!device) {
      return res.status(404).json({ error: "Device not found" });
    }

    return res.status(200).json({ message: `Device updated successfully` });
  } catch (error) {
    return res.status(500).json({ error: "serial Number must be unique!" });
  }
};
