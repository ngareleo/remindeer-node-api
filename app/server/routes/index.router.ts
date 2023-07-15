import { Router } from "express";
import { indexGetController } from "../controllers/index.controller";

const indexRouter = Router();

indexRouter.get("/", indexGetController);

export default indexRouter;
