import { Router, Request, Response } from "express";
import { createEvent, getEvents } from "./event.service";

const router = Router();

router.get("/", async (_request: Request, response: Response) => {
  try {
    const results = await getEvents();
    response.status(200).json(results);
  } catch {
    response.status(500).send({ error: "Internal Server Error" });
  }
});

router.post("/", async (request: Request, response: Response) => {
  try {
    const event = request.body;
    const eventCreated = await createEvent(event.name, event.description, event.startDate, event.endDate);

    response.status(201).json(eventCreated);
  } catch {
    response.status(500).send({ error: "Internal Server Error" });
  }
});

export default router;
