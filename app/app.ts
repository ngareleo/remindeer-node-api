import express, { Express } from "express";
import path from "path";
import morgan from "morgan";
import slowDown = require("express-slow-down");

import createAppConfig from "./server/config/config";
import { handle404 } from "./server/middleware/error-handling.middleware";
import apiRouter from "./server/routes/api";
import appRouter from "./server/routes/app";
import { connectToDatabase } from "./server/config/config";

const app: Express = express();
const { speedLimiter: speedLimiterOptions, jsonConfig } = createAppConfig();
connectToDatabase();

app.use(slowDown(speedLimiterOptions));
app.use(morgan("common"));
app.use(express.json(jsonConfig));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use(apiRouter);
app.use(appRouter);

app.use(handle404);

module.exports = app;
