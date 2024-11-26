import { UserModel } from "../models/user.model";

const users: UserModel[] = [
  {
    username: "BijanProgrammer",
    password: "$2b$10$Sb1bKhBansKZhMCSF62yc.HBWtNWClbQkQYI0unjWFPJFkn6JS9im",
  },
];

export const createUser = (user: UserModel): void => {
  users.push(user);
};

export const readUser = (username: string): UserModel | undefined => {
  return users.find((user) => user.username === username);
};
