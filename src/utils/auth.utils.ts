import { Response } from "express";

import jwt from "jsonwebtoken";

import { PasswordlessUserModel } from "../models/passwordless-user.model";

export const generateToken = (
  res: Response,
  user: PasswordlessUserModel,
): void => {
  const payload = {
    user,
  };

  const token = jwt.sign(payload, "this is a secret", { expiresIn: "3d" });

  res.cookie("token", token, {
    secure: true,
    httpOnly: true,
    maxAge: 3 * 24 * 3600 * 1000,
  });
};
