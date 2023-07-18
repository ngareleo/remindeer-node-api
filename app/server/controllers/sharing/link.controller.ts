import { Request, Response } from "express";
import SemesterModel from "../../models/semester.model";
import EventModel from "../../models/event.model";
import TimetableModel from "../../models/timetable.model";
import TaskModel from "../../models/task.model";
import HomeworkModel from "../../models/homework.model";
import ResourceLinkModel from "../../models/resource-link.model";

export async function linkGetController(req: Request, res: Response) {
  const { id } = req.params;
  if (!id) res.status(400).send("Bad request");
  const resource = await Promise.all([
    await SemesterModel.findById(id),
    await EventModel.findById(id),
    await TimetableModel.findById(id),
    await TaskModel.findById(id),
    await HomeworkModel.findById(id),
  ]);
  const validResource = resource.filter((resource) => resource !== null) as any;

  if (validResource.length === 0) {
    res.status(404).send("Resource not found");
  } else {
    const link = new ResourceLinkModel(validResource._id);
    res.status(200).send(link.link);
  }
}
