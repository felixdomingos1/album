import jwt from "jsonwebtoken";
import auth from "../config/auth";

const createTokenService = (artiste_id: number): string => {
  const token = jwt.sign(
    {
      artiste_id,
    },
    auth.key,
    { expiresIn: auth.expiresIn }
  );

  return token;
};

export { createTokenService };
