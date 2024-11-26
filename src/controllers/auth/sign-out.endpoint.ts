import { RequestHandler } from "express";

export const signOutEndpoint: RequestHandler = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Signed out successfully." });
};
