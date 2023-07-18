import { Router } from "express";
import {
  sharingEventController,
  sharingHomeworkController,
  sharingSemesterController,
  sharingTaskController,
  sharingTimetableController,
  sharingUnitController,
} from "../controllers/sharing/sharing.controller";
import { linkGetController } from "../controllers/sharing/link.controller";

const sharingRouter = Router();

sharingRouter.get("/link/:id", linkGetController);
sharingRouter.post("/semester", sharingSemesterController);
sharingRouter.post("/unit", sharingUnitController);
sharingRouter.post("/event", sharingEventController);
sharingRouter.post("/task", sharingTaskController);
sharingRouter.post("/homework", sharingHomeworkController);
sharingRouter.post("/timetable", sharingTimetableController);

export default sharingRouter;
