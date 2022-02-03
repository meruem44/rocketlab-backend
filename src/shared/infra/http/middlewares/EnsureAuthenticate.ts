import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { jwtConfig } from "@config/jwt";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      status: "error",
      message: "Token JWT is missing",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, jwtConfig.secret);

    const { sub } = decoded as ITokenPayload;

    request.user = {
      id: sub,
    };

    next();
  } catch (error) {
    return response.status(401).json({
      status: "error",
      message: "Token JWT invalid",
    });
  }
}
