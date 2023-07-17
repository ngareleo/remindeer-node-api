import { Schema, model } from "mongoose";
import { UserType } from "./user.model";

export interface SemesterType {
  id: number;
  label: string;
  description: string | null;
  from: Date;
  to: Date;
  owner: UserType;
  created_at: Date;
  updated_at: Date;
}

const Semester = new Schema({
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
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

const SemesterModel = model("Semester", Semester);
export default SemesterModel;
