import { createServer } from "http";
import app from "./app";
import { initializeDatabase } from "./database";
import config from "./database/configuration/config";

export async function main() {
  await initializeDatabase();
  const server = createServer(app);

  server.listen(config.port, async () => {
    try {
      console.log(`Api Service listen on ${config.host}:${config.port}`);
      console.log(`Env : ${process.env.NODE_ENV}`);
    } catch (error: any) {
      console.log(`Error : ${error.message}`);
    }
  });
}

main().catch((error) => console.log("error : ", error));
