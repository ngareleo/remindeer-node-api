import { Schema, model } from "mongoose";

export interface TaskType {
  id: number;
  label: string;
  description: string;
  repeat: boolean;
  due: Date;
  completed: Date;
  repeat_to: Date;
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
