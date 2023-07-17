import { Response, Request } from "express";
import UserModel from "../models/user.model";

export const checkUserDetailsController = async (
  req: Request,
  res: Response
) => {
  const { username, email, name } = req.body;
  const [usernameValid, emailValid, nameValid] = await Promise.all([
    UserModel.findOne().where("username").equals(username),
    UserModel.findOne().where("email").equals(email),
    UserModel.findOne().where("name").equals(name),
  ]);
  res.json({
    username: usernameValid ? false : true,
    email: emailValid ? false : true,
    name: nameValid ? false : true,
  });
};

export const checkPhoneNumberController = async (
  req: Request,
  res: Response
) => {
  const { phone_number } = req.params;
  const phone_numberValid = await UserModel.findOne()
    .where("phone_number")
    .equals(phone_number);
  res.send(phone_numberValid ? false : true);
};
