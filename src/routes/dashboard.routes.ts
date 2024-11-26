import express from "express";

import { authMiddleware } from "../middlewares/auth.middleware";

import DashboardController from "../controllers/dashboard";

const dashboardRouter = express.Router();

dashboardRouter.get(
  "/dashboard/settings",
  authMiddleware,
  DashboardController.getSettingsEndpoint,
);

export { dashboardRouter };
