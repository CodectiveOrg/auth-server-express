import { UserModel } from "./user.model";

export type PasswordlessUserModel = Omit<UserModel, "password">;
