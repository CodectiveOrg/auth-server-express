import { RequestHandler } from "express";

export const verifyEndpoint: RequestHandler = (req, res) => {
  const { user } = res.locals;

  if (!user) {
    res.sendStatus(401);
    return;
  }

  res.sendStatus(200);
};
