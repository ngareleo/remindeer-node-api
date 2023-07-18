import { Request, Response } from "express";
import UserModel from "../models/user.model";

export const userGetController = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) {
    res.status(400).send("Provide ID field");
  } else {
    const user = await UserModel.findById(id);
    if (!user) {
      res.status(200).send("User not found");
    } else {
      res.status(200).json(user);
    }
  }
};

export const userLoginController = async (req: Request, res: Response) => {
  let { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send("Some fields are missing!");
  } else {
    const user = await UserModel.findOne()
      .where("username")
      .equals(username)
      .where("password")
      .equals(password);

    if (!user) {
      res.status(200).send("User not found!");
    } else {
      res.status(200).json(user);
    }
  }
};

export const userPostController = async (req: Request, res: Response) => {
  let { username, password, email, photo, phone_number, name } = req.body;

  if (!username || !password || !email || !phone_number || !name) {
    res.status(400).send("Some fields are missing!");
  } else {
    let user = new UserModel({
      username,
      password,
      email,
      photo,
      phone_number,
      name,
    });

    await user
      .save()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
};
