import { Schema, model } from "mongoose";
import { UnitType } from "./unit.model";
import { TimetableType } from "./timetable.model";
import { UserType } from "./user.model";

export interface LectureType {
  id: number;
  label: string;
  description: string | null;
  unit: UnitType | null;
  timetable: TimetableType | null;
  from: Date;
  to: Date;
  repeat_to: Date;
  day: Capitalize<
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday"
  >;
  owner: UserType;
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
  unit: {
    type: Schema.Types.ObjectId,
    ref: "Unit",
  },
  timetable: {
    type: Schema.Types.ObjectId,
    ref: "Timetable",
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

const LectureModel = model("Lecture", Lecture);
export default LectureModel;
