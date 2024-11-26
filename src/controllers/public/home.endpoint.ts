import { RequestHandler } from "express";

export const homeEndpoint: RequestHandler = (req, res) => {
  res.send("Hello, friend!");
};
