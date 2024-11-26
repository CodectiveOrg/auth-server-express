import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import "dotenv/config";

const PORT = process.env.PORT || 5000;

const main = (): void => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cors());

  app.get("/", (req, res) => {
    res.send("Hello, friend!");
  });

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
  });
};

main();
