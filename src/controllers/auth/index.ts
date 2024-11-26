import { signInEndpoint } from "./sign-in.endpoint";
import { signUpEndpoint } from "./sign-up.endpoint";
import { signOutEndpoint } from "./sign-out.endpoint";
import { verifyEndpoint } from "./verify.endpoint";

const AuthController = {
  signInEndpoint,
  signUpEndpoint,
  signOutEndpoint,
  verifyEndpoint,
};

export default AuthController;
