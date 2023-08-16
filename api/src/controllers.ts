import { Router } from "express";
import HealthController from "./health/health.controller";
import EventController from "./events/event.controller";
import WelcomeController from "./welcome/welcome.controller";

const router = Router();

router.use("/events", EventController);
router.use("/health", HealthController);
router.use("/", WelcomeController);

export default router;
