import express from "express";

import "dotenv/config";

const PORT = process.env.PORT || 5000;

const main = (): void => {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello, friend!");
  });

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
  });
};

main();
