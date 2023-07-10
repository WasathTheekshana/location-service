import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    enum: ["pos", "kisok", "signage"],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Device", deviceSchema);