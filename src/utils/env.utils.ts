export const validateEnv = (): void => {
  if (!process.env.TOKEN_SECRET) {
    throw new Error("TOKEN_SECRET does not exist in .env file.");
  }
};
