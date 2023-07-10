import express from "express";
import {
  addDevice,
  deleteDevice,
  getDevices,
  updateDevice,
} from "../../controllers/device.controller.js";

const router = express.Router();

router.route("/").get(getDevices);
router.route("/").delete(deleteDevice);
router.route("/addDevice").post(addDevice);
router.route("/").put(updateDevice);

export default router;
