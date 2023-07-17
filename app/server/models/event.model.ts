import { Schema, model } from "mongoose";

export interface EventType {
  id: number;
  label: string;
  description: string;
  repeat: "daily" | "weekly" | "monthly" | "yearly";
  event_date: Date;
  repeat_to: Date;
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
