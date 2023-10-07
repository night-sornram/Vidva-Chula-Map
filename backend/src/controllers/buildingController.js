import Building from "../models/buildingModel.js";

/** @type {import("express").RequestHandler} */
export const createBuilding = async (req, res) => {
  try {
    const newBuilding = new Building(req.body);
    await newBuilding.save();

    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

/** @type {import("express").RequestHandler} */
export const getBuildings = async (req, res) => {
  const Buildings = await Building.find();

  res.status(200).json(Buildings);
};

/** @type {import("express").RequestHandler} */
export const editBuilding = async (req, res) => {
  try {
    const updated = await Building.findByIdAndUpdate(req.params.id, req.body);

    if (updated) {
      res.status(200).json({ message: "OK" });
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (err) {
    if (err.name === "CastError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

/** @type {import("express").RequestHandler} */
export const deleteBuilding = async (req, res) => {
  try {
    const deleted = await Building.findByIdAndDelete(req.params.id, req.body);

    if (deleted) {
      res.status(200).json({ message: "OK" });
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (err) {
    res.status(501).json({ error: "Not Implemented" });
  }
  
};
