require("dotenv").config({ path: "./test.env" });
import { createEvent, getEvents } from "./event.service";
import app from "../app";

const request = require("supertest");

import mocked = jest.mocked;

jest.mock("./event.service");

describe("Event Router", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /events", () => {
    it("should return a list of events", async () => {
      const mockEvents = [
        { id: "some-uuid", name: "Event 1", description: "Event 1 Description", startDate: 123, endDate: 456 },
        { id: "some-uuid", name: "Event 2", description: "Event 2 Description", startDate: 3333, endDate: 444 },
      ];

      mocked(getEvents).mockResolvedValue(mockEvents);

      const response = await request(app).get("/events");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockEvents);
    });

    it("should handle errors and return 500 status", async () => {
      mocked(getEvents).mockRejectedValue(new Error("Test error"));

      const response = await request(app).get("/events");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: "Internal Server Error" });
    });
  });

  describe("POST /events", () => {
    it("should create a new event", async () => {
      const mockEvent = {
        name: "New Event",
        description: "Description",
        startDate: 123,
        endDate: 234,
      };

      const expectedResponse = { ...mockEvent, id: "any-uuid" };

      mocked(createEvent).mockResolvedValue(expectedResponse);

      const response = await request(app).post("/events").send(mockEvent);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expectedResponse);
    });

    it("should handle errors and return 500 status", async () => {
      const mockEvent = {
        name: "New Event",
        description: "Description",
        startDate: 123,
        endDate: 123,
      };

      mocked(createEvent).mockRejectedValue(new Error("Test error"));

      const response = await request(app).post("/events").send(mockEvent);

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: "Internal Server Error" });
    });
  });
});
