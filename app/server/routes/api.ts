import { Router } from "express";
import usersRouter from "./users.router";
import indexRouter from "./index.router";

const apiRouter = Router();

apiRouter.use("/api", usersRouter);
apiRouter.use("/api", indexRouter);

export default apiRouter;
