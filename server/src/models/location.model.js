import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  address: { type: String },
  phone: { type: String },
  devices: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Device",
  }],
});

export default mongoose.model("Location", locationSchema);
