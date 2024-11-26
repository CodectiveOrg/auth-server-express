import { RequestHandler } from "express";

export const signOutEndpoint: RequestHandler = async (req, res) => {
  res.clearCookie(process.env.TOKEN_KEY!);
  res.json({ message: "Signed out successfully." });
};
