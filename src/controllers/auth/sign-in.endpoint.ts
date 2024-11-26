import { RequestHandler } from "express";
import { readUser } from "../../database/user.table";
import { comparePasswords, generateToken } from "../../utils/auth.utils";

export const signInEndpoint: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  const user = readUser(username);

  if (!user) {
    res.status(401).json({ error: "Username or password is incorrect." });
    return;
  }

  const isPasswordCorrect = await comparePasswords(password, user.password);

  if (!isPasswordCorrect) {
    res.status(401).json({ error: "Username or password is incorrect." });
    return;
  }

  generateToken(res, { username });

  res.json({ message: "Signed in successfully." });
};
