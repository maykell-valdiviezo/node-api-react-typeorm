import request from "supertest";
import app from "./app";
import { getEvents } from "./events/event.service";
import mocked = jest.mocked;

jest.mock("./events/event.service");

describe("App", () => {
  it("responds to GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toContain("Welcome to the API");
  });

  it("responds to GET /health", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toEqual(200);
    expect(response.text).toContain("ok");
  });

  it("responds to GET /events", async () => {
    const mockEvents = [
      { id: "some-uuid", name: "Event 1", description: "Event 1 Description", startDate: 123, endDate: 456 },
      { id: "some-uuid", name: "Event 2", description: "Event 2 Description", startDate: 3333, endDate: 444 },
    ];

    mocked(getEvents).mockResolvedValue(mockEvents);
    const response = await request(app).get("/events");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(mockEvents);
  });

  it("returns 404 for unknown routes", async () => {
    const response = await request(app).get("/unknown");
    expect(response.status).toEqual(404);
  });
});
