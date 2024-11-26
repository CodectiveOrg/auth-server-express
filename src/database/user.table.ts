import { UserModel } from "../models/user.model";

const users: UserModel[] = [
  {
    username: "BijanProgrammer",
    password: "1234",
  },
];

export const createUser = (user: UserModel): void => {
  users.push(user);
};

export const readUser = (username: string): UserModel | undefined => {
  return users.find((user) => user.username === username);
};
