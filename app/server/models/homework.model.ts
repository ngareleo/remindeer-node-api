import { Schema, model } from "mongoose";
import { UnitType } from "./unit.model";
import { SemesterType } from "./semester.model";
import { UserType } from "./user.model";

export interface HomeworkType {
  _id: string;
  label: string;
  description: string | null;
  due: Date;
  unit: UnitType | null;
  semester: SemesterType | null;
  completed: Date | null;
  owner: UserType;
  created_at: Date;
  updated_at: Date;
}

const Homework = new Schema({
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
  semester: {
    type: Schema.Types.ObjectId,
    ref: "Semester",
  },
  due: {
    type: Date,
    required: true,
  },
  completed: {
    type: Date,
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

const HomeworkModel = model("Homework", Homework);
export default HomeworkModel;
