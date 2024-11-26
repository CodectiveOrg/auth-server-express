import { RequestHandler } from "express";
import { createUser, readUser } from "../../database/user.table";
import { generateToken, hashPassword } from "../../utils/auth.utils";

export const signUpEndpoint: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  const user = readUser(username);

  if (user) {
    res.status(400).json({ error: "Username is already taken." });
    return;
  }

  const hashedPassword = await hashPassword(password);

  createUser({ username, password: hashedPassword });

  generateToken(res, { username });

  res.json({ message: "Signed up successfully." });
};
