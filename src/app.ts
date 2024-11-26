import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import "dotenv/config";

import { publicRouter } from "./routes/public.routes";
import { authRouter } from "./routes/auth.routes";
import { dashboardRouter } from "./routes/dashboard.routes";

import { validateEnv } from "./utils/env.utils";

validateEnv();

const PORT = process.env.PORT || 5000;

const main = (): void => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );

  app.use(publicRouter);
  app.use(authRouter);
  app.use(dashboardRouter);

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
  });
};

main();
