import { Router } from "express";
import authRouter from "./auth.router";

const appRouter = Router();

appRouter.use("/app", authRouter);

export default appRouter;
