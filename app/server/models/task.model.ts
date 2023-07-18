import { Schema, model } from "mongoose";
import { TimetableType } from "./timetable.model";
import { UnitType } from "./unit.model";
import { SemesterType } from "./semester.model";
import { UserType } from "./user.model";

export interface TaskType {
  id: number;
  label: string;
  venue: string | null;
  description: string | null;
  repeat: boolean;
  due: Date;
  completed: Date | null;
  timetable: TimetableType | null;
  unit: UnitType | null;
  semester: SemesterType | null;
  repeat_to: Date;
  owner: UserType;
  created_at: Date;
  updated_at: Date;
}

const Task = new Schema({
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  repeat: {
    type: Boolean,
    required: true,
  },
  venue: {
    type: String,
  },
  due: {
    type: Date,
    required: true,
  },
  completed: {
    type: Date,
  },
  repeat_to: {
    type: Date,
  },
  semester_id: {
    type: Schema.Types.ObjectId,
    ref: "Semester",
  },
  unit_id: {
    type: Schema.Types.ObjectId,
    ref: "Unit",
  },
  timetable_id: {
    type: Schema.Types.ObjectId,
    ref: "Timetable",
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

const TaskModel = model("Task", Task);
export default TaskModel;
