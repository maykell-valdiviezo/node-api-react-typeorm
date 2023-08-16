import { Event } from "./event.model";
import { getDataSource } from "../database";

export async function createEvent(name: string, description: string, startDate: number, endDate: number): Promise<Event> {
  const eventRepository = getDataSource().getRepository<Event>(Event);

  const event: Event = new Event();
  event.name = name;
  event.description = description;
  event.startDate = startDate;
  event.endDate = endDate;

  if (event.name.trim().length > 32) {
    throw new Error("Event name is too long");
  }
  return eventRepository.save(event);
}

export async function getEvents(): Promise<Event[]> {
  const eventRepository = getDataSource().getRepository<Event>(Event);

  return eventRepository.find();
}
