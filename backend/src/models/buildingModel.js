import mongoose from "mongoose";

const BuildingSchema = new mongoose.Schema({
  building_name :  {
    type: String,
    required: true,
  },
  building_img :  {
    type: String,
    required: true,
  },
  building_floor :  {
    type: Number,
    required: true,
  },
  building_details :  {
    type: String,
    required: true,
  },
  building_time_open :  {
    type: String,
    required: true,
  },
  building_time_close :  {
    type: String,
    required: true,
  },
}

)

const Building = mongoose.model("Building", BuildingSchema);

export default Building;



