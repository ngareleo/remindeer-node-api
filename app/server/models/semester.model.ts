import { Schema, model } from "mongoose";

export interface SemesterType {
  id: number;
  label: string;
  description: string;
  from: Date;
  to: Date;
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
    required: true,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
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
