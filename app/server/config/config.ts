require("dotenv").config();
import mongoose from "mongoose";
import env from "./env.config";

export default function createAppConfig(): AppConfig {
  return {
    speedLimiter: {
      windowMs: 15 * 60 * 1000,
      delayAfter: 100,
      delayMs: 1000,
    },
    jsonConfig: {
      limit: "10kb",
    },
  };
}

export const connectToDatabase = () => {
  mongoose
    .connect(env.db, {})
    .then((conn) => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};
