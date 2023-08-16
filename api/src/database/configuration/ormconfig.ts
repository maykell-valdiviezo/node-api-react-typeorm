import { Event } from "../../events";

export const ORM_CONFIG = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT!!),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Event],
  migrations: [],
  subscribers: [],
};
