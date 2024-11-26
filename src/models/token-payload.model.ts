import { PasswordlessUserModel } from "./passwordless-user.model";

export type TokenPayloadModel = {
  user: PasswordlessUserModel;
};
