import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_request: Request, response: Response) => {
  response.send("Welcome to the API");
});

export default router;
