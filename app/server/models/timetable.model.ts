import { Schema, model } from "mongoose";

export interface TimetableType {
  id: number;
  label: string;
  description: string | undefined;
  valid_until: Date;
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
  updated_at: {
    type: Date,
    required: true,
  },
});

const TimetableModel = model("Timetable", Timetable);
export default TimetableModel;
