import { Schema, model } from "mongoose";
import { SemesterType } from "./semester.model";
import { UserType } from "./user.model";

export interface TimetableType {
  id: number;
  label: string;
  description: string | null;
  semester: SemesterType | null;
  valid_until: Date;
  owner: UserType;
  created_at: Date;
  updated_at: Date;
}

const Timetable = new Schema({
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  valid_until: {
    type: Date,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
  semester_id: {
    type: Schema.Types.ObjectId,
    ref: "Semester",
    required: true,
  },
});

const TimetableModel = model("Timetable", Timetable);

export default TimetableModel;
