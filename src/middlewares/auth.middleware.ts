import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

import { TokenPayloadModel } from "../models/token-payload.model";

export const authMiddleware: RequestHandler = (req, res, next) => {
  const token = req.cookies[process.env.TOKEN_KEY!];

  if (!token) {
    res.sendStatus(401);
    return;
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.TOKEN_SECRET!,
    ) as TokenPayloadModel;

    res.locals.user = payload.user;

    next();
  } catch {
    res.clearCookie(process.env.TOKEN_KEY!);
    res.sendStatus(401);
  }
};
