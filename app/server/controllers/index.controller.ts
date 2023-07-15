import { Request, Response } from "express";

export const indexGetController = (req: Request, res: Response) => {
  res.send("Hello from Leo!");
};
