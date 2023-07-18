import { Request, Response } from "express";
import SemesterModel from "../../models/semester.model";
import UnitModel from "../../models/unit.model";
import HomeworkModel from "../../models/homework.model";
import TimetableModel from "../../models/timetable.model";
import TaskModel from "../../models/task.model";
import EventModel from "../../models/event.model";

export async function sharingEventController(req: Request, res: Response) {
  const {
    label,
    description,
    owner,
    created_at,
    updated_at,
    to,
    from,
    day,
    is_all_day,
    repeat,
    repeat_to,
    day_of_week,
    event_date,
    unit_id,
    semester_id,
    timetable_id,
  } = req.body;

  const event = new EventModel({
    label,
    description,
    owner,
    created_at,
    updated_at,
    to,
    from,
    day,
    is_all_day,
    repeat,
    repeat_to,
    day_of_week,
    event_date,
    unit_id,
    semester_id,
    timetable_id,
  });

  await event
    .save()
    .then((event) => {
      console.log(event);
      res.json(event);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
}

export async function sharingTaskController(req: Request, res: Response) {
  const {
    label,
    description,
    owner,
    created_at,
    updated_at,
    venue,
    due,
    repeat,
    repeat_to,
    completed,
    timetable_id,
    unit_id,
    semester_id,
  } = req.body;

  const newTask = new TaskModel({
    label,
    description,
    owner,
    created_at,
    updated_at,
    venue,
    due,
    repeat,
    repeat_to,
    completed,
    timetable_id,
    unit_id,
    semester_id,
  });

  await newTask
    .save()
    .then((task) => {
      console.log(task);
      res.json(task);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
}

export async function sharingTimetableController(req: Request, res: Response) {
  const {
    label,
    description,
    owner,
    created_at,
    updated_at,
    valid_until,
    semester_id,
  } = req.body;

  const newTimetable = new TimetableModel({
    label,
    description,
    owner,
    created_at,
    updated_at,
    valid_until,
    semester_id,
  });

  await newTimetable
    .save()
    .then((timetable) => {
      console.log(timetable);
      res.json(timetable);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
}

export async function sharingHomeworkController(req: Request, res: Response) {
  const {
    label,
    description,
    owner,
    created_at,
    updated_at,
    due,
    completed,
    unit_id,
    semester_id,
  } = req.body;

  const newHomework = new HomeworkModel({
    label,
    description,
    owner,
    created_at,
    updated_at,
    completed,
    due,
    unit_id,
    semester_id,
  });

  await newHomework
    .save()
    .then((homework) => {
      console.log(homework);
      res.json(homework);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
}

export async function sharingUnitController(req: Request, res: Response) {
  const {
    name,
    description,
    unit_code,
    owner,
    created_at,
    updated_at,
    lecturer,
    semester_id,
  } = req.body;

  const newUnit = new UnitModel({
    name,
    description,
    unit_code,
    owner,
    created_at,
    updated_at,
    lecturer,
    semester_id,
  });

  await newUnit
    .save()
    .then((unit) => {
      console.log(unit);
      res.json(unit);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
}

export async function sharingSemesterController(req: Request, res: Response) {
  const { label, description, from, to, owner, created_at, updated_at } =
    req.body;

  const semester = new SemesterModel({
    label: label,
    description: description,
    from: from,
    to: to,
    owner: owner,
    created_at: created_at,
    updated_at: updated_at,
  });

  await semester
    .save()
    .then((semester) => {
      console.log(semester);
      res.json(semester);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
}
