import { Router } from "express";
import authRouter from "./auth.router";
import checksRouter from "./checks.router";

const appRouter = Router();

appRouter.use("/app", authRouter);
appRouter.use("/app", checksRouter);

export default appRouter;
