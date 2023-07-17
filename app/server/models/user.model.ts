import { Schema, model } from "mongoose";

export interface UserType {
  name: string;
  username: string;
  email: string;
  password: string;
  photo: string;
  phone_number: string;
  created_at: Date;
  updated_at: Date;
}

const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    validator: (value: string) => {
      return value.length > 3;
    },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  phone_number: {
    type: String,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("User", User);
export default UserModel;
