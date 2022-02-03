import { sign } from "jsonwebtoken";
import { jwtConfig } from "@config/jwt";

import { ITokenProviderDTO } from "../dtos/ITokenProviderDTO";
import { ITokenProvider } from "../models/ITokenProvider";

class JWTTokenProvider implements ITokenProvider {
  public generateToken(data: ITokenProviderDTO): string {
    return sign({}, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
      subject: data.user_id,
    });
  }
}

export { JWTTokenProvider };
