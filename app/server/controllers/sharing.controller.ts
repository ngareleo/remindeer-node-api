import { Request, Response } from "express";

export const shareSemesterController = async (req: Request, res: Response) => {
  const { label, description, from, to, created_at, updated_at } = req.body;
};
