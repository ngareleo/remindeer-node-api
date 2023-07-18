import { Schema, model } from "mongoose";
import { UnitType } from "./unit.model";
import { SemesterType } from "./semester.model";
import { TimetableType } from "./timetable.model";
import { UserType } from "./user.model";

export interface EventType {
  _id?: string;
  label: string;
  venue: string;
  description: string | null;
  day: Capitalize<
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday"
  >;
  repeat: Capitalize<"daily" | "weekly" | "monthly" | "yearly">;
  unit: UnitType | null;
  semester: SemesterType | null;
  timetable: TimetableType | null;
  from: Date | null;
  to: Date | null;
  is_all_day: boolean | null;
  event_date: Date;
  repeat_to: Date;
  owner: UserType;
  created_at: Date;
  updated_at: Date;
}

const Event = new Schema({
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  venue: {
    type: String,
  },
  unit_id: {
    type: Schema.Types.ObjectId,
    ref: "Unit",
  },
  semester_id: {
    type: Schema.Types.ObjectId,
    ref: "Semester",
  },
  timetable_id: {
    type: Schema.Types.ObjectId,
    ref: "Timetable",
  },
  from: {
    type: Date,
  },
  to: {
    type: Date,
  },
  is_all_day: {
    type: Boolean,
  },
  repeat: {
    type: String,
    required: true,
  },
  event_date: {
    type: Date,
    required: true,
  },
  repeat_to: {
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

const EventModel = model("Event", Event);
export default EventModel;
