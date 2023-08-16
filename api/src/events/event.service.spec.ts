require("dotenv").config({ path: "./test.env" });
import { createEvent, getEvents } from "./event.service";
import { Event } from "./event.model";
import { getDataSource, initializeDatabase } from "../database";

describe("Event Service", () => {
  beforeEach(async () => {
    await initializeDatabase();
  });

  afterEach(async () => {
    await getDataSource().destroy();
  });

  describe("Create an Event", () => {
    describe("createEvent", () => {
      it("should create an event record", async () => {
        const event = {
          name: "Superbowl 2024",
          description: "Football event",
          startDate: 1723478400, // 2024-08-12 12:00:00 PM GMT-4:00
          endDate: 1723500000, // 2024-08-12 6:00:00 PM GMT-4:00
        };
        const result = await createEvent(event.name, event.description, event.startDate, event.endDate);

        expect(result).toBeDefined();
        expect(result.id).toBeDefined();

        expect(result.name).toBe(event.name);
        expect(result.description).toBe(event.description);
        expect(result.startDate).toBe(event.startDate);
        expect(result.endDate).toBe(event.endDate);
      });

      it("should throw an error if the name is longer than 32 chars", async () => {
        const event = {
          name: "This is a super fun and interesting event!!",
          description: "Football event",
          startDate: 1723478400, // 2024-08-12 12:00:00 PM GMT-4:00
          endDate: 1723500000, // 2024-08-12 6:00:00 PM GMT-4:00
        };

        await expect(createEvent(event.name, event.description, event.startDate, event.endDate)).rejects.toThrow("Event name is too long");
      });
    });
  });

  describe("List the Events", () => {
    describe("getEvents", () => {
      it("should return the list of events", async () => {
        const seedData = [
          {
            name: "Superbowl 2024",
            description: "Football event",
            startDate: 1723478400, // 2024-08-12 12:00:00 PM GMT-4:00
            endDate: 1723500000, // 2024-08-12 6:00:00 PM GMT-4:00
          },
          {
            name: "Euro 2024",
            description: "Soccer event",
            startDate: 1723478400, // 2024-06-14 9:00:00 PM GMT+2:00 (berlin)
            endDate: 1723500000, // 2024-07-14 11:00:00 PM GMT+2:00  (berlin)
          },
        ];

        const events = getDataSource()
          .createEntityManager()
          .create(Event, seedData as unknown as Event);
        await getDataSource().manager.save(events);

        const results = await getEvents();

        expect(results).toBeDefined();
        expect(results.length).toBe(2);
        expect(results[1].name).toBe(seedData[1].name);
      });
    });
  });
});
