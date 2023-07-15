import express, { Express } from "express";
import path from "path";
import morgan from "morgan";
import slowDown = require("express-slow-down");
import createAppConfig from "./config";

import { handle404 } from "./server/middleware/error-handling.middleware";
import indexRouter from "./server/routes/index.router";

const app: Express = express();
const { speedLimiter: speedLimiterOptions, jsonConfig } = createAppConfig();

// middleware
app.use(slowDown(speedLimiterOptions));
app.use(morgan("common"));
app.use(express.json(jsonConfig));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// routes
app.use(indexRouter);

// errors

app.use(handle404);

module.exports = app;
