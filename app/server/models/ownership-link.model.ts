import { Schema, model } from "mongoose";
import { UserType } from "./user.model";
import { EventType } from "./event.model";
import { HomeworkType } from "./homework.model";
import { LectureType } from "./lecture.model";
import { SemesterType } from "./semester.model";
import { TaskType } from "./task.model";
import { TimetableType } from "./timetable.model";
import { UnitType } from "./unit.model";

export interface OwnershipLinkType {
  user: UserType;
  resource:
    | EventType
    | HomeworkType
    | LectureType
    | SemesterType
    | TaskType
    | TimetableType
    | UnitType;

  created_at: Date;
  updated_at: Date;
}

const OwnershipLink = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  resource: {
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

const OwnershipLinkModel = model("OwnershipLink", OwnershipLink);

export default OwnershipLinkModel;
