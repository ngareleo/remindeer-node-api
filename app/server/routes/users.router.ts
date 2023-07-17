import { Router } from "express";
import {
  userGetController,
  userLoginController,
  userPostController,
} from "../controllers/user.controller";

const usersRouter = Router();

usersRouter.get("/user/:id", userGetController);
usersRouter.post("/user", userPostController);
usersRouter.post("/user/login", userLoginController);

export default usersRouter;
