import { Router } from "express";
import usersRouter from "./users.router";
import indexRouter from "./index.router";
import sharingRouter from "./sharing.router";

const apiRouter = Router();

apiRouter.use("/api", usersRouter);
apiRouter.use("/api", indexRouter);
apiRouter.use("/api", sharingRouter);

export default apiRouter;
