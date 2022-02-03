import { AppError } from "@shared/errors/AppError";
import { Request, Response, NextFunction } from "express";

export function globalError(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
    messageError: err.message,
  });
}
