import { Schema, model } from "mongoose";

export interface HomeworkType {
  id: number;
  label: string;
  description: string;
  due: Date;
  completed: Date;
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
  due: {
    type: Date,
    required: true,
  },
  completed: {
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

const HomeworkModel = model("Homework", Homework);
export default HomeworkModel;
