import { Router } from "express";
import { userLoginController } from "../controllers/user.controller";

const authRouter = Router();

authRouter.post("/auth/login", userLoginController);

export default authRouter;
