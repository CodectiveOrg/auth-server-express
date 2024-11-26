import express from "express";

import { authMiddleware } from "../middlewares/auth.middleware";

import AuthController from "../controllers/auth";

const authRouter = express.Router();

authRouter.post("/auth/sign-in", AuthController.signInEndpoint);
authRouter.post("/auth/sign-up", AuthController.signUpEndpoint);
authRouter.delete("/auth/sign-out", AuthController.signOutEndpoint);
authRouter.get("/auth/verify", authMiddleware, AuthController.verifyEndpoint);

export { authRouter };
