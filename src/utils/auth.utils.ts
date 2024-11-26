import { Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { PasswordlessUserModel } from "../models/passwordless-user.model";

export const generateToken = (
  res: Response,
  user: PasswordlessUserModel,
): void => {
  const payload = {
    user,
  };

  const token = jwt.sign(payload, process.env.TOKEN_SECRET!, {
    expiresIn: "3d",
  });

  res.cookie(process.env.TOKEN_KEY!, token, {
    secure: true,
    httpOnly: true,
    maxAge: 3 * 24 * 3600 * 1000,
  });
};

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

export const comparePasswords = async (
  password: string,
  hashed: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashed);
};
