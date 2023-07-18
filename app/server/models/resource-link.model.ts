import { Schema, model } from "mongoose";
import { SemesterType } from "./semester.model";
import { TimetableType } from "./timetable.model";
import { EventType } from "./event.model";
import { TaskType } from "./task.model";
import { HomeworkType } from "./homework.model";
import { randomUUID } from "crypto";

export interface ResourceLinkType {
  _id: number;
  link: string;
  resoure: SemesterType | TimetableType | EventType | TaskType | HomeworkType;
  created_at: Date;
  updated_at: Date;
}

const ResourceLink = new Schema({
  link: {
    type: Schema.Types.UUID,
    required: true,
    default: randomUUID(),
  },
  resource_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const ResourceLinkModel = model("ResourceLink", ResourceLink);

export default ResourceLinkModel;
