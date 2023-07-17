import { Router } from "express";
import {
  checkPhoneNumberController,
  checkUserDetailsController,
} from "../controllers/checks.controller";

const checksRouter = Router();

checksRouter.get("/check/user-details", checkUserDetailsController);
checksRouter.get("/check/phone-number/:id", checkPhoneNumberController);

export default checksRouter;
