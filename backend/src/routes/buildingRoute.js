import express from "express";

import * as buildingController from "../controllers/buildingController.js";

const router = express.Router();

router.get("/", buildingController.getBuildings);
router.post("/", buildingController.createBuilding);
router.put("/:id", buildingController.editBuilding);
router.delete("/:id", buildingController.deleteBuilding);

export default router;
