import express from "express";
import {
  addLocation,
  deleteLocation,
  getLocationById,
  getLocations,
  updateLocation,
} from "../../controllers/location.controller.js";

const router = express.Router();

router.route("/").get(getLocations);
router.route("/:id").get(getLocationById);
router.route("/addLocation").post(addLocation);
router.route("/updateLocation/:id").put(updateLocation);
router.route("/deleteLocation/:id").delete(deleteLocation);
router
  .route("/deleteLocation/")
  .delete((req, res) =>
    res.status(500).send({ error: "Location ID is required." })
  );


export default router;
