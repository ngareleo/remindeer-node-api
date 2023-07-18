import { Schema, model } from "mongoose";
import { SemesterType } from "./semester.model";
import { UserType } from "./user.model";

export interface UnitType {
  _id: number;
  label: string;
  unit_code: string;
  description: string | null;
  lecturer: string;
  semester: SemesterType | null;
  owner: UserType;
  created_at: Date;
  updated_at: Date;
}

const Unit = new Schema({
  label: {
    type: String,
    required: true,
  },
  unit_code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  lecturer: {
    type: String,
    required: true,
  },
  semester_id: {
    type: Schema.Types.ObjectId,
    ref: "Semester",
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
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
