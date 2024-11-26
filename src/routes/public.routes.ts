import express from "express";

import PublicController from "../controllers/public";

const publicRouter = express.Router();

publicRouter.get("/", PublicController.homeEndpoint);

export { publicRouter };
