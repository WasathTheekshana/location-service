import express from "express";
import LocationModel from "../../models/location.model.js";

// Add a new location
export const addLocation = async (req, res) => {
  try {
    const { name, address, phone } = req.body;

    if (!name || !address) {
      return res
        .status(400)
        .json({ message: "Name and address are required." });
    }

    const existingLocation = await LocationModel.findOne({ name, address });

    if (existingLocation) {
      return res
        .status(400)
        .json({ message: "Location already exists in the database." });
    }

    const location = new LocationModel({
      name,
      address,
      phone,
    });

    const savedLocation = await location.save();
    return res.status(200).json(savedLocation);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get all locations
export const getLocations = async (req, res) => {
  try {
    const locations = await LocationModel.find();
    return res.status(200).json(locations);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

// Get a location by id
export const getLocationById = async (req, res) => {
  try {
    const location = await LocationModel.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: "Location not found!" });
    }
    return res.status(200).json(location);
  } catch (error) {
    return res.status(404).json({ message: "Location not found!" });
  }
};

// Update a location by id
export const updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }
    const body = req.body;

    const updateLocation = await LocationModel.findByIdAndUpdate(id, body);
    if (updateLocation) {
     return res.status(200).json({ message: "Location updated successfully." });   
    } else {
        return res.status(400).json({ message: "Location not found!" });
    }

  } catch (error) {
    return res.status(404).json({ message: "Location not found!" });
  }
};

// Delete a location by id
export const deleteLocation = async (req, res) => {
    try{
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID is required." });
        }
        LocationModel.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Location not found!" });
            } else {
                return res.status(200).json({ message: "Location deleted successfully." });
            }
        })
        .catch((error) => {
            return res.status(404).json({ message: "Location not found!" });
        })
    }
    catch(error){
        return res.status(404).json({ message: "Location not found!" });
    }
}