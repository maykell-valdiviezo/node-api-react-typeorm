import "reflect-metadata";
import express from "express";
import controllers from "./controllers";

const cors = require("cors");
const app = express();

app.use(express.json());

const logIncomingHttp = (request: express.Request, _response: express.Response, next: Function) => {
  next();
};

app.use(cors());
app.use(logIncomingHttp);
app.use("/", controllers);

export default app;
