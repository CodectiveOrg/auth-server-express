import express from "express";

import AuthController from "../controllers/auth";

const authRouter = express.Router();

authRouter.post("/auth/sign-in", AuthController.signInEndpoint);

export { authRouter };
