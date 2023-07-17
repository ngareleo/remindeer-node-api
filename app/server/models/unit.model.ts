import { Schema, model } from "mongoose";

export interface UnitType {
  id: number;
  label: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

const Unit = new Schema({
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
});

const UnitModel = model("Unit", Unit);
export default UnitModel;
