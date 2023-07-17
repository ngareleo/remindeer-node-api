import { Schema, model } from "mongoose";

export interface LectureType {
  id: number;
  label: string;
  description: string;
  from: Date;
  to: Date;
  repeat_to: Date;
  day:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";
  created_at: Date;
  updated_at: Date;
}

const Lecture = new Schema({
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
  repeat_to: {
    type: Date,
  },
  day: {
    type: String,
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

const LectureModel = model("Lecture", Lecture);
export default LectureModel;
